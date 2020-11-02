import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';
import { faChalkboardTeacher, faLaptopHouse, faVirus, faGhost, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {

  @Input() students: Array<any>;
  @Input() status: Status;
  @Input() index: number;
  studentInfos: any;

  faChalkboardTeacher = faChalkboardTeacher;
  faLaptopHouse = faLaptopHouse;
  faVirus = faVirus;
  faGhost = faGhost;
  faChevronRight = faChevronRight;
  faTimes = faTimes;

  constructor() { 
    this.studentInfos = {
      "_id": 0,
      "name": "default name",
      "email": "defaultname@proflex.com",
      "phone": "+1 (801) 527-3471",
      "address": "988 Lafayette Avenue, Cliffside, Louisiana, 4607",
      "status": "En cours à IMT Atlantique"
    }
  }

  ngOnInit(): void {
  }

  /**
   * Displays the student informations
   * 
   * @param student 
   */
  public displayStudentInfo(student: any) {
    this.studentInfos = student;
    let contentList = document.getElementsByClassName("status-card-content-list") as HTMLCollectionOf<HTMLElement>;
    contentList[this.index].style.display = "none";

    let contentInfo = document.getElementsByClassName("status-card-content-info") as HTMLCollectionOf<HTMLElement>;
    contentInfo[this.index].style.display = "flex";
  }

  /**
   * Displays the student list
   */
  public displayStudentList() {
    let contentList = document.getElementsByClassName("status-card-content-list") as HTMLCollectionOf<HTMLElement>;
    contentList[this.index].style.display = "flex";
    
    let contentInfo = document.getElementsByClassName("status-card-content-info") as HTMLCollectionOf<HTMLElement>;
    contentInfo[this.index].style.display = "none";
  }
}