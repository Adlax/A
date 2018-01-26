export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';
  constructor(private http: Http){
  }
  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryUrl = '${SpotifyService.BASE_URL}${URL}';
    if(params){
      queryUrl = '${queryUrl}${params.join('&')}';
    }
    return this.http.request(queryUrl).map( (res: any) => res.json() );
  }
  search(query: string, type: string): Observable<any[]> {
    return this.query('/search', ['q=${query}','type=${type}']);
  }
  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }
  getTrack(id: string): Observable<any[]> {
    return this.query('/tracks/${id}');
  }
}
