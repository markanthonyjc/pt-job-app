import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagesRoutingModule } from './pages-routing.module';
import { JobComponent } from './job/job.component';
import { ComponentsModule } from '../components/components.module';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobItemComponent } from './job/job-list/job-item/job-item.component';
import { JobItemImageComponent } from './job/job-list/job-item/job-item-image/job-item-image.component';
import { JobItemCompanyComponent } from './job/job-list/job-item/job-item-company/job-item-company.component';
import { JobItemInfoComponent } from './job/job-list/job-item/job-item-info/job-item-info.component';
import { JobItemSkillComponent } from './job/job-list/job-item/job-item-skill/job-item-skill.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    JobComponent,
    JobListComponent,
    JobItemComponent,
    JobItemImageComponent,
    JobItemCompanyComponent,
    JobItemInfoComponent,
    JobItemSkillComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
