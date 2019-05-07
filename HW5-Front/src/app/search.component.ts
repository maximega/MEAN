import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  providers: [AppService]
})
export class SearchComponent {
  cityName = '';
  weatherData = [];

  constructor(private appService: AppService) {}

  getWeather(cityName : string){

    const __ = this;

    this.appService.getAllWeather(cityName)
      .subscribe(data => {
        data = JSON.parse(data._body);
        __.weatherData = data
      })
  }

}
