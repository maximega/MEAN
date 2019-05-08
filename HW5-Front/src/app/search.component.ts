import {Component, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { AppService } from './app.service';


@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  providers: [AppService]
})
export class SearchComponent implements OnInit{
  cityName = '';
  weatherData = [];
  user = 'hello';

  constructor(private appService: AppService, private _cookieService:CookieService) {
    this.user = (this._cookieService.get('_accessToken'));
    console.log(this.user);
  }
  getLogin(){
    if (this.user === undefined){
      this.appService.getHomePage(this.user).subscribe();
    }
  }
  getWeather(cityName : string){

    const __ = this;

    this.appService.getAllWeather(cityName, this.user)
      .subscribe(data => {
        if(data){
        data = JSON.parse(data._body);
        __.weatherData = data
        }
        else{
          __.weatherData = ["there were no cities matching the input"];
        }
      })
  }
  ngOnInit() {
    this.getLogin();
  }

}
