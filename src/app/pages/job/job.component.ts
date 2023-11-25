import { Component, OnInit, OnDestroy } from '@angular/core';
import { Job } from '../../shared/types/job';
import { Subscription } from 'rxjs';
import { JobService } from '../../shared/services/pages/job.service';
import { CustomErrorResponse } from '../../shared/constants/error-response';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent implements OnInit, OnDestroy {
  // public variables
  jobData: Job[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  // private variables
  private getJobSubs: Subscription = new Subscription();

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getJobSubs = this.jobService.getJobs()
      .subscribe(result => {
        this.jobData = result;
        this.loading = !this.loading;
      }, error => {
        this.loading = !this.loading;
        CustomErrorResponse(error.status);
        console.log(error);
      });
  }

  ngOnDestroy(): void {
    this.getJobSubs.unsubscribe();
  }
}
