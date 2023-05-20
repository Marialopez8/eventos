import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {
  PUBLIC_KEY = '';
  HASH = ''; 
  URL_API = `https://4xrpeg4z3gpssoatz7u27cbo2m0ftjsg.lambda-url.us-west-2.on.aws/`;
  constructor(private http: HttpClient) {}
  
    getAllEvents () : Observable<any>{ 
      return this.http.get<any>(this.URL_API)
      .pipe(map((data: any)=>data.data.results))
    }

}
