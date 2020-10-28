import { Injectable } from '@angular/core';
import { Status } from '../models/status';
import jsonData from '../../assets/data/students.json';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  /**
   * toStudentsObject parse a json file and returns object
   * 
   * @param json 
   * 
   * @return Array<Object>
   */
  private toStudentsObject(json: any) {
      return JSON.parse(JSON.stringify(json));
  }

  /**
   * getStudentsByStatus sorts students by status and return a Map<String, Array<Object>>
   * 
   * @return Map<String, Array<Object>>
   */
  public getStudentsByStatus(): Map<String, Array<Object>> {
    const students = this.toStudentsObject(jsonData);
    let cours = new Array<Object>();
    let teletravail = new Array<Object>();
    let malade = new Array<Object>();
    let absent = new Array<Object>();
    let studentsStatusMap = new Map<String, Array<Object>>();

    students.forEach((student: any) => {
        switch (student.status) {
            case Status.Teletravail:
                teletravail.push(student);
                break;
            case Status.Cours:
                cours.push(student);
                break;
            case Status.Malade:
                malade.push(student);
                break;
            case Status.Absent:
                absent.push(student);
                break;
            default:
                console.log("This status is undefined: " + student.status);
        }
    });

    studentsStatusMap.set(Status.Teletravail, teletravail);
    studentsStatusMap.set(Status.Cours, cours);
    studentsStatusMap.set(Status.Malade, malade);
    studentsStatusMap.set(Status.Absent, absent);

    console.log(studentsStatusMap);

    return studentsStatusMap;
}
}
