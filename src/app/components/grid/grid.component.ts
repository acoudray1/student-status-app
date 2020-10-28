import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public studentsStatusMap: Map<String, Array<Object>>;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentsStatusMap = this.studentService.getStudentsByStatus();
  }

}
