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
  URL_API = `https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=b2dfbab623af21346250392176e9b972&hash=b9ba02a8c71af91c7fb810fd38286e8a`;
  constructor(private http: HttpClient) {}
  
    getAllComics () : Observable<any>{ 
      return this.http.get<any>(this.URL_API)
      .pipe(map((data: any)=>data.data.results))
    }

}
