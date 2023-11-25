import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent implements OnInit {
  @Input() name!: string;
  private variants: { [key: string]: string } = {
    'NEW!': ' badge--new',
    FEATURED: ' badge--featured',
  }
  customClass: string = '';
  constructor(){}

  ngOnInit(): void {
    this.customClass = `badge${this.variants[this.name] ?? ''}`;    
  }
}
