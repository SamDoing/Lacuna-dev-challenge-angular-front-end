import { Observable } from 'rxjs';
import { Job } from './../models/job.model';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = 'https://localhost:7193/api/users/id'
  constructor(private httpClient: HttpClient) {
  }

  getAll(id : number): Observable<Job[]> {
    let url = `${this.baseUrl}/jobs`
              .replace('id', id.toString())

    return this.httpClient.get<Job[]>(url);
  }

  getAJob(id : number): Observable<Job> {
    let url = `${this.baseUrl}/get-job`
              .replace('id', id.toString());

    return this.httpClient.get<Job>(url);
  }

  doAJob(id : string): Observable<Job> {
    let url = 'https://localhost:7193/api/users/do-job/id'
              .replace('id', id);

    return this.httpClient.get<Job>(url);
  }
}
