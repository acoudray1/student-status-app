import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {

  @Input() students: Array<Object>;
  @Input() status: Status;

  constructor() { }

  ngOnInit(): void {
    console.log(this.students);
    console.log(this.status);
  }

}
