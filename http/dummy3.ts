//SearchResultComponent
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

//YoutubeSearchComponent
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