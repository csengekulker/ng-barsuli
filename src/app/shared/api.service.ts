import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  host:string = environment.apihost

  fetchStudents() {
    let end = 'students'
    let url = this.host + end

    return this.http.get<any>(url)
  }

  fetchScores() {
    let end = 'scores'
    let url = this.host + end

    return this.http.get<any>(url)
  }
}
