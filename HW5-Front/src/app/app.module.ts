import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

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
  providers: [{
    provide: AppService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
