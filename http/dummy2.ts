////////////////////////////////////////////////////////////////////////////////
//Writing a YouTubeSearchComponent//////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//Writing a SearchResult////////////////////////////////////////////////////////

class SearchResult{
  id: string;
  title: string;
  description: string;
  thunbnailUrl: string;
  videoUrl: string;
  constructor(obj?: Object){
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thunbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || 'https://www.youtube.com/watch?v=${this.id}';
  }
}


////////////////////////////////////////////////////////////////////////////////
//Writing the YouTubeService////////////////////////////////////////////////////

let YOUTUBE_API_KEY: string = "blabla";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";
export var youtubeServiceInjectables: Array<any> = [
  bind(YoutubeService).toClass(YoutubeService),
  bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
  bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
];

//dans http/app.ts
import {youtubeServiceInjectables} from "components/YoutubeSearchComponent";
bootstrap(HttpApp, [HTTP_BINDINGS, youtubeServiceInjectables]);

//YouTubeService constructor dans components/YoutubeSearchComponent.ts
@Injectable()
export class YoutubeService {
  constructor(public http: Http, @Inject(YOUTUBE_API_KEY) private apiKey: string, @Inject(YOUTUBE_API_URL) private apiUrl: string){
  }
  search(query: string): Rx.Observable<SearchResult[]> {
    let params: string = [
      'q=${query}',
      'key=${this.apiKey}',
      'part=snippet',
      'type=video',
      'maxResults=10'
    ].join("&");
    let queryUrl: string = '${this.apiUrl}?${params}';
    return this.http.get(queryUrl)
      .toRx()
      .map( (response: Response) => {
        return (<any>response.json()).items.map( item => {
          console.log("raw items", item); //commenter ou pas
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thunbnails.high.url
          });
        });
      });
  }
}


////////////////////////////////////////////////////////////////////////////////
//SearchBox Component///////////////////////////////////////////////////////////

@Component({
  selector: "search-box",
  events: ["loading", "results"],
})
@View({
  template: `
    <input type="text" class="form-control" placeholder="Search..." autofocus>
  `
})
class SearchBox implements OnInit {
  loading: EventEmitter = mew EventEmitter();
  results: EventEmitter = new EventEmitter();
  constructor(public youtube: YoutubeService, private el: ElementRef){

  }
  onInit(): void {
    (<any>Rx).Observable.fromEvent(this.el.nativeElement,"keyup")
      .map( (e: any) => {e.target.value})
      .filter( (text: string) => {text.length > 1})
      .debounce(250)
      .do( () => this.loading.next(true))
      .flatMapLatest( (query: string) => this.youtube.search(query) )
      .subscribe(
        (results: SearchResult[]) => {this.loading.next(false); this.results.next(results);},
        (error: any) => {this.loading.next(false); console.log(error);},
        () => (this.loading.next(false);)
      )
      //d abord cenversion du event en flux
      //selection des texts non vide
      //enlever tout ce qui est tape en plus de 250 ms
      //l event emmiter loading emet grace a next une valeur de true
      //flatMapLatest erase tout d avant et prend que le dernier et envoie le
      //text tape filtre etc dans la fonction search du service youtube qui est un YoutubeService
      //on souscrit au flux sortant de l instance youtube , qui est un SearchResult[]
  }
}


////////////////////////////////////////////////////////////////////////////////
//SearchResultComponent/////////////////////////////////////////////////////////

@Component({
	selector: "search-result",
	properties: ["result"]
})
@View({
	template: `
		<div class="col-sm-6 col-md-3">
			<div class="thumbnail">
				<img src="{{result.thumbnailUrl}}">
				<div class="caption">
					<h3> {{result.title}} </h3>
					<p> {{result.description}} </p>
					<p> <a href="{{result.videoUrl}}" class="btn btn-default" role="button">VWatch ideo</a> </p>
				</div>
			</div>
		</div>
	`
})
export class SearchResultComponent {
	result: SearchResult;
}


////////////////////////////////////////////////////////////////////////////////
//YoutubeSearchComponent////////////////////////////////////////////////////////

@Component({
	selector: "youtube-search",
})
@View({
	directives: [CORE_DIRECTIVES, SearchBox, SearchResultComponent],
	template: `
		<div class="container">
			<div class="page-header">
				<h1> Youtube Search <img style="float: right" src="${loadingGif}" *ng-if="loading" /> </h1>
			</div>
      <div class="row">
        <div class="input-group input-group-lg col-md-12">
          <search-box (loading)="loading=$event" (results)="updateResults($event)"> </search-box>
        </div>
      </div>
      <div class="row">
        <search-result *ng-for="#result of results" [result]=result > </search-result>
      </div>
		</div>
	`
})
export class YoutubeSearchComponent {
	results: SearchResults[];
	updateResults(results: SearchResults[]): void {
		this.results = results;
		console.log("Resultats ; ", results);
	}
}


////////////////////////////////////////////////////////////////////////////////
//POST PUT PATCH DELETE HEAD////////////////////////////////////////////////////

makePost(): void {
  this.loading = true;
  this.http.post(
    "http://jsonplaceholder.typicode.com/posts",
    JSON.stingify({
      body: "bar",
      title: "foo",
      userId: 1
    })
  )
  .toRx()
  .subscribe( (res: Response) => {
    this.data = res.json();
    this.loading = false;
  });
}

makeDelete(): void {
  this.loading = true;
  this.http.delete(
    "http://jsonplaceholder.typicode.com/posts/1",
  )
  .toRx()
  .subscribe( (res: Response) => {
    this.data = res.json();
    this.loading = false;
  });
}

makeHeaders(): void {
  let headers: Headers = new Headers();
  headers.append("X-API-TOKEN", "ng-book");
  let opts: RequestOptions = new RequestOptions();
  opts.headers = headers;
  this.http.get("http://jsonplaceholder.typicode.com/posts/1", opts)
  .toRx()
  .subscribe( (res: Response) => {
    this.data = res.json();
  });
}
