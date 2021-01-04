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
      if (messages.type == "course-informations") {
        this.courseName = messages.message.courseName;
        this.zoomLink = messages.message.zoomLink;
      }
    });
  }

  onCourseChange(value: String): void {
    console.log({type: "course-informations", message: { courseName: value, zoomLink: this.zoomLink }});
    this.webSocket.send({type: "course-informations", message: { courseName: value, zoomLink: this.zoomLink }});
  }

  onZoomLinkChange(value: String): void {
    console.log({type: "course-informations", message: { courseName: this.courseName, zoomLink: value }});
    this.webSocket.send({type: "course-informations", message: { courseName: this.courseName, zoomLink: value }});
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
