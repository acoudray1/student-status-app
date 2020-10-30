import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';
import { faChalkboardTeacher, faLaptopHouse, faVirus, faGhost } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {

  @Input() students: Array<Object>;
  @Input() status: Status;
  faChalkboardTeacher = faChalkboardTeacher;
  faLaptopHouse = faLaptopHouse;
  faVirus = faVirus;
  faGhost = faGhost;

  constructor() { }

  ngOnInit(): void {
  }

}