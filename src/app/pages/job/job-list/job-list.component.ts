import { Component, Input } from '@angular/core';
import { Job } from '../../../shared/types/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  @Input() jobData!: Job[];

  constructor(){}
}
