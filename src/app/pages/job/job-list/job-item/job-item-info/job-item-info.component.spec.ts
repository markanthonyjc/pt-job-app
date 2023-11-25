import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemInfoComponent } from './job-item-info.component';

describe('JobItemInfoComponent', () => {
  const mockJobData = {
    id: 1,
    name: "Senior Frontend Developer",
    type: "Full Time",
    condition: "USA only",
    company: {
      image: "https://svgshare.com/i/yGX.svg",
      name: "Photosnap",
      badges: [
        "NEW!",
        "FEATURED"
      ]
    },
    skills: [
      "Frontend",
      "Senior",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    publishing: {
      time_elapsed: "1d ago"
    }
  };

  let component: JobItemInfoComponent;
  let fixture: ComponentFixture<JobItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobItemInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobItemInfoComponent);
    component = fixture.componentInstance;
    component.job = mockJobData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
