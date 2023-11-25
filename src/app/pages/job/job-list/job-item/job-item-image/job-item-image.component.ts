import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-item-image',
  templateUrl: './job-item-image.component.html',
  styleUrl: './job-item-image.component.scss'
})
export class JobItemImageComponent {
  @Input() image!: string;
  constructor(){}
}
