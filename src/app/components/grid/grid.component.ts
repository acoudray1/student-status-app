import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Status } from '../../models/status';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public status: Array<String>;
  public studentsStatusMap: Map<String, Array<Object>>;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentsStatusMap = this.studentService.getStudents();
    this.status = [Status.Teletravail, Status.Cours, Status.Malade, Status.Absent];
  }

  /**
   * getStudentsByStatus returns an array of students that has the same status
   * 
   * @param status 
   * @return Array<Object>
   */
  public getStudentsByStatus(status: Status): Array<Object> {
    return this.studentsStatusMap.get(status);
  }

}
