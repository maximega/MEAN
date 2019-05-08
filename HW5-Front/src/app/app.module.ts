import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [AppService, CookieService],

  bootstrap: [AppComponent]
})
export class AppModule { }
