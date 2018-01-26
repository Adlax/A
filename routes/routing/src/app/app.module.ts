import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angulat/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from '/login/login.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
//import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  //routes de base
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: AboutComponent },
  { path: 'contactus', redirectTo: 'contact'},
  //authentication
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [ LoggedInGuard ] },
  //nested
  { path: 'products', component: ProductsComponent, children: childRoutes }
  // example for a route with parameters using ActivatedRoute
  // { path: 'products:id', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    //pour les children;
    ProductsModule
  ],
  providers: [
    //decommenter pour du routage hash-based
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
export class: ProductComponent {
  id: string;
  constructor(private route: ActivateRoute){
    route.params.subscribe( params => {this.id = params['id'];} );
  }
}
*/
