import { Component, Input } from '@angular/core';
import { Job } from '../../../../../shared/types/job';

@Component({
  selector: 'app-job-item-info',
  templateUrl: './job-item-info.component.html',
  styleUrl: './job-item-info.component.scss'
})
export class JobItemInfoComponent {
  @Input() job!: Job;
  constructor(){}
}
