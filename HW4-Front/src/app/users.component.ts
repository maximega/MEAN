import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'users-root',
  templateUrl: './users.component.html',
  providers: [AppService]
})
export class UsersComponent {
  favorites = '';
  userData = {favorite: []};

  constructor(private appService: AppService) {}

  getUser(favorites : string){

    const __ = this;

    this.appService.getUser(favorites)
      .subscribe(data => {
        data = JSON.parse(data._body);
        __.userData = data;
      })
  }
  deleteCity(i : number){
    this.userData.favorite.splice(i,1);
  }

}
