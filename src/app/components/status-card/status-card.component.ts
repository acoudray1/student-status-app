import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {

  constructor(private studentService: StudentService) {
    studentService.getStudentsByStatus();
  }

  ngOnInit(): void {
  }

}
