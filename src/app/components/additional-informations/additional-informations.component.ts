import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-additional-informations',
  templateUrl: './additional-informations.component.html',
  styleUrls: ['./additional-informations.component.scss']
})
export class AdditionalInformationsComponent implements OnInit {

  courseName: String
  currentDateTime: String 
  zoomLink: String

  constructor(private datePipe: DatePipe) {
    setInterval(() => {
      this.currentDateTime = this.datePipe.transform(new Date(), 'medium');
    }, 1);

    this.zoomLink = '';
    this.courseName = 'Interaction collaborative';
  }

  ngOnInit(): void {
  }

  onCourseChange(): void {

  }

  onZoomLinkChange(): void {
    
  }
}
