import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';
import { JobService } from '../../shared/services/pages/job.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JobListComponent } from './job-list/job-list.component';
import { ComponentsModule } from '../../components/components.module';
import { JobItemComponent } from './job-list/job-item/job-item.component';
import { JobItemImageComponent } from './job-list/job-item/job-item-image/job-item-image.component';
import { JobItemCompanyComponent } from './job-list/job-item/job-item-company/job-item-company.component';
import { JobItemInfoComponent } from './job-list/job-item/job-item-info/job-item-info.component';
import { JobItemSkillComponent } from './job-list/job-item/job-item-skill/job-item-skill.component';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JobComponent,
        JobListComponent,
        JobItemComponent,
        JobItemImageComponent,
        JobItemCompanyComponent,
        JobItemInfoComponent,
        JobItemSkillComponent
      ],
      imports: [ComponentsModule, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
