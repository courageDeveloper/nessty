/**
 .
 */
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { FirebaseServiceProvider } from '../providers/firebase-service';

@Injectable()
export class HttpService {
  errorMessage;
  catArray;
  page = 1;
  static get parameters() {
    return [[Http]];
  }

  constructor(private http: Http, private firebaseService: FirebaseServiceProvider, public httpClient: HttpClient) { }

  sendData(email: string) {
    var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  getBoards() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=${this.page}&categories=707+718+720+715+714+717+711+721+727+713+712+719+728+722`, { headers: headers })
      .pipe(map(res => res.json())).pipe(catchError((err) => {
        this.errorMessage = err.json();
        console.log(err.json());
        throw err;
      }));
  }

  getHeaders(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=${this.page}&categories=707+718+720+715+714+717+711+721+727+713+712+719+728+722`, { headers: headers })
      .pipe(catchError((err) => {
        this.errorMessage = err.json();
        console.log(err.json());
        throw err;
      }));
  }

  getCategories() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`https://www.healthbootcamps.com/wp-json/wp/v2/categories?include=707+718+720+715+714+717+711+721+727+713+712+719+728+722&per_page=100`, { headers: headers })
      .pipe(map(res => res.json())).pipe(catchError((err) => {
        this.errorMessage = err.json();
        console.log(err.json());
        throw err;
      }));
  }


}
