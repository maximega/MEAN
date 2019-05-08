import {Component, OnInit} from '@angular/core';
import { AppService } from './app.service';
import {CookieService} from "angular2-cookie/core";


@Component({
  selector: 'users-root',
  templateUrl: './users.component.html',
  providers: [AppService]
})
export class UsersComponent implements OnInit {
  cityName = '';
  userData = {favorite: []};
  user = '';

    constructor(private appService: AppService, private _cookieService:CookieService) {
        this.user = this._cookieService.get('key');
        console.log(this.user);
    }

    getLogin(){
        if (!this.user){
            this.appService.getHomePage(this.user).subscribe();
        }
    }
    getUser(){

    const __ = this;

    this.appService.getUser(this.user)
      .subscribe(data => {
        data = JSON.parse(data._body);
        __.userData = data;
      })
    }

    sendDelete(cityName : string){
    const __ = this;
    this.appService.sendDelete(cityName, this.user)
      .subscribe(data => {
        data = JSON.parse(data._body);
        __.userData = data;
      })
    }
    ngOnInit() {
        this.getLogin();
    }

}
