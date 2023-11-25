import { Component, Input } from '@angular/core';
import { Job } from '../../../../shared/types/job';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss'
})
export class JobItemComponent {
  @Input() job!: Job;

  constructor() {}
}
