import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Http, Headers } from '@angular/http'


@Injectable()
export class AppService {
  constructor(private http: Http) {}

  public getHomePage(user : string){
    return this.http.get('http://localhost:3000/hw5/home')
  }

  public getAllWeather(cityName : string, user: string): Observable<any> {
    let hdrs = new Headers();
    hdrs.append('uid', user);
    return this.http.get('http://localhost:3000/hw5/search/' + cityName, {headers: hdrs})
  }

  public getUser(user : string): Observable<any> {
    let hdrs = new Headers();
    hdrs.append('uid', user);
    return this.http.get('http://localhost:3000/hw5/user/',{headers: hdrs})
  }

  public sendDelete(cityName : string, user : string):  Observable<any> {
    let hdrs = new Headers();
    hdrs.append('uid', user);
    return this.http.get('http://localhost:3000/hw5/user/delete/' + cityName, {headers: hdrs})
  }

}
