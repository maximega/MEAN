import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'users-root',
  templateUrl: './users.component.html',
  providers: [AppService]
})
export class UsersComponent {
  cityName = '';
  userData = {favorite: []};

  constructor(private appService: AppService) {}

  getUser(){

    const __ = this;

    this.appService.getUser()
      .subscribe(data => {
        data = JSON.parse(data._body);
        __.userData = data;
      })
  }

  sendDelete(cityName : string){
    const __ = this;
    this.appService.sendDelete(cityName)
      .subscribe(data => {
        data = JSON.parse(data._body);
        __.userData = data;
      })
  }

}
