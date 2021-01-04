import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-additional-informations',
  templateUrl: './additional-informations.component.html',
  styleUrls: ['./additional-informations.component.scss']
})
export class AdditionalInformationsComponent implements OnInit {

  courseName: String
  currentDateTime: String 
  zoomLink: String
  destroyed$ = new Subject()

  constructor(private datePipe: DatePipe, private webSocket: WebSocketService) {
    setInterval(() => {
      this.currentDateTime = this.datePipe.transform(new Date(), 'medium');
    }, 1);

    this.zoomLink = '';
    this.courseName = 'Interaction collaborative';
  }

  ngOnInit(): void {
    this.webSocket.connect().pipe(
      takeUntil(this.destroyed$)
    ).subscribe(messages => {
      console.log('****\n' + messages + '\n****');
      this.courseName = JSON.parse(messages).courseName;
      this.zoomLink = JSON.parse(messages).zoomLink;
    });
  }

  onCourseChange(value: String): void {
    console.log(JSON.stringify({ courseName: value, zoomLink: this.zoomLink }));
    this.webSocket.send(JSON.stringify({ courseName: value, zoomLink: this.zoomLink }));
  }

  onZoomLinkChange(value: String): void {
    console.log(JSON.stringify({ courseName: this.courseName, zoomLink: value }));
    this.webSocket.send(JSON.stringify({ courseName: this.courseName, zoomLink: value }));
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
