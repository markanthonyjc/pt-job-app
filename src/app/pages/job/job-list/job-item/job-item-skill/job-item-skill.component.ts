import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-item-skill',
  templateUrl: './job-item-skill.component.html',
  styleUrl: './job-item-skill.component.scss'
})
export class JobItemSkillComponent {
  @Input() skills!: string[];
  constructor(){}
}
