import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  declarations: [
    SkillComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkillComponent,
    BadgeComponent
  ]
})
export class ComponentsModule { }
