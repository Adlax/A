////////////////////////////////////////////////////////////////////////////////
//Adding http.js into the index.html////////////////////////////////////////////
<script src="/_/vendor/angular2.dev.2.0.0-alpha.37.js"></script>
<script src="/_/vendor/angular2-http.dev.2.0.0-alpha.37.js"></script>


////////////////////////////////////////////////////////////////////////////////
//Adding the typings////////////////////////////////////////////////////////////
<reference path="../../node_modules/angular2/bundles/typings/angular2/angula\r2.d.ts" />
<reference path="../../node_modules/angular2/bundles/typings/angular2/http.d\.ts" />


////////////////////////////////////////////////////////////////////////////////
//import from angular2/http/////////////////////////////////////////////////////
import { Component, bootstrap, View } from "angular2/angular2";
import { HTTP_BINDINGS } from "angular2/http";

//comme ca en bottstrapant on peu injecter la librairie ;
bootstrap(HttpApp, [HTTP_BINDINGS]);

//comme ca on peu la mettre dans le constructeur;
export class HttpApp {
  constructor(public http: Http){

  }
}


////////////////////////////////////////////////////////////////////////////////
//A Basic Request///////////////////////////////////////////////////////////////
import { Component, View, NgIf } from "angular2/angular2";
import { Http, Response } from "angular2/http";

@Component({
  selector: 'simple-http'
})
@View({
  directives: [NgIf],
  template: `
    <h2> Simple Request </h2>
    <button type="button" (click)="makeRequest()"> Make Request </button>
    <div *ng-if="loading"> loading ... </div>
    <pre> {{ data | json }}</pre>
  `
})
export class SimpleHttpComponent{
  data: Object;
  loading: boolean;
  constructor(public http: Http){

  }
  makeRequest(): void{
    this.loading = true;
    this.http.request("http://jsonplaceholder.typicode.com/posts/1")
    .toRx()
    .subscribe( (res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}
