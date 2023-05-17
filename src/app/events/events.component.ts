import { Component,OnInit } from '@angular/core';
import { EventsApiService } from './event/shared/events-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-comics',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private comicSvc: EventsApiService){
  }
  allComics: Observable<any> | undefined;

  ngOnInit(): void {
    this.getComics();
  }

  getComics(){
    this.allComics = this.comicSvc.getAllComics();
    }

}
