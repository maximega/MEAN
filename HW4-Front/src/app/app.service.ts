import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Http } from '@angular/http'

@Injectable()
export class AppService {
  constructor(private http: Http) {}

  public getAllWeather(cityName : string): Observable<any> {
    return this.http.get('http://localhost:3000/hw4/search/' + cityName)
  }

  public getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/hw4/user/')
  }

  public sendDelete(cityName : string):  Observable<any> {
    return this.http.get('http://localhost:3000/hw4/user/delete/' + cityName)
  }

}
