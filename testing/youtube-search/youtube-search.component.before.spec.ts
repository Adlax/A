import {
  async,
  fakeAsync,
  inject,
  ComponentFixture,
  TestBed,
  tick
} from '@angular/core/testing';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import { YouTubeSearchComponent } from './you-tube-search.component';
import { SearchResultComponent } from './search-result.component';
import { SearchBoxComponent } from './search-box.component';
import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  YouTubeSearchService
} from './you-tube-search.service';


describe('YoutubeSearchComponent (before)', () => {
  let component: YoutubeSearchComponent;
  let fixture: ComponentFixture<YoutubeSearchComponent>;

  beforeEach(aync( ()=> {
    TestBed.configureTestingModule({
      declarations: [
        YouTubeSearchComponent,
        SearchResultComponent,
        SearchBoxComponent
      ],
      providers: [
        YouTubeSearchService,
        BaseRequestOptions,
        MockBackend,
        {provide: YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY'},
        {provide: YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL'},
        {provide: Http, useFacory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {return new Http(backend,defaultOptions);}, deps: [MockBackend,BaseRequestOptions]},
      ]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(YouTubeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('search', () => {
    it('parses YouTube response',
      inject([YouTubeSearchService,MockBackend],
        fakeAsync((service,backend) => {
        let res;
        backend.connections.subscribe( c => {
          c.mockRespond(new Response(<any>{
            body: `
            {
              "items": [
                {
                  "id": {"videoId": "VIDEO_ID"},
                  "snippet": {
                    "title": "TITLE",
                    "description": "DESCRIPTION",
                    "thumbnails": { "high": {"url": "THUMBNAIL_URL"} }
                  }
                }
              ]
            }
            `
          }));
        });
        service.search('hey').subscribe(_res => {
          res=_res;
        });
        tick();

        const video = res[0];
        expect(video.id).toEqual('VIDEO_ID');
        expect(video.title).toEqual('TITLE');
        expect(video.description).toEqual(DESCRIPTION);
        expect(video.thumbnail).toEqual('THUMBNAIL_URL');
        }))
      );
  });

});
