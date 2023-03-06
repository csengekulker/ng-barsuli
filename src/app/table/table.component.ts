import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private api: ApiService) { }

  students!: any[]
  scores: any[] = []

  studentScores: StudentScore[] = []

  buildArray() {
    let array: StudentScore[] = []

    this.students.forEach((std: any) => {

      this.scores.forEach((scr: any) => {
        if (std.id == scr.studentId) {

          let item: StudentScore = {
            id: std.id,
            name: std.name,
            gender: std.gender,
            group: std.group,
            score: scr.score,
          }

          array.push(item)
        }
      })
    });

    return array
  }

  ngOnInit(): void {

    this.api.fetchStudents().subscribe({
      next: (data: any) => {
        this.students = data

      },
      error: (err: any) => {
        console.log(err)
      }
    })

    this.api.fetchScores().subscribe({
      next: (data: any) => {
        this.scores = data

        this.studentScores = this.buildArray()

      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
}

interface StudentScore {
  id: number,
  name: string,
  gender: string,
  group: string
  score: number,
}