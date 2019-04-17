import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Http } from '@angular/http'

@Injectable()
export class AppService {
  constructor(private http: Http) {}



  public getAllWeather(cityName : string): Observable<any> {
    //console.log("name", cityName);
    return this.http.get('http://localhost:3000/hw4/search/' + cityName)
  }

  public getUser(userName : string): Observable<any> {
    //console.log("name", userName);
    return this.http.get('http://localhost:3000/hw4/users/' + userName)
  }

}
