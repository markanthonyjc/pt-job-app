import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemSkillComponent } from './job-item-skill.component';

describe('JobItemSkillComponent', () => {
  let component: JobItemSkillComponent;
  let fixture: ComponentFixture<JobItemSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobItemSkillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobItemSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
