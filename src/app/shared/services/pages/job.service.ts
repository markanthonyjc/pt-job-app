import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../types/job';
import { environment } from '../../../../environments/environment';
import { JOBS } from '../../constants/endpoint';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.urlBase}${JOBS.get}`);
  }
}
