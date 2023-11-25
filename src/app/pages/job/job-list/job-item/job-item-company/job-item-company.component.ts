import { Component, Input } from '@angular/core';
import { Company } from '../../../../../shared/types/job';

@Component({
  selector: 'app-job-item-company',
  templateUrl: './job-item-company.component.html',
  styleUrl: './job-item-company.component.scss'
})
export class JobItemCompanyComponent {
  @Input() company!: Company;

  constructor(){}
}
