import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemCompanyComponent } from './job-item-company.component';
import { ComponentsModule } from '../../../../../components/components.module';

describe('JobItemCompanyComponent', () => {
  const mockCompanyData = {
    image: "https://svgshare.com/i/yGX.svg",
    name: "Photosnap",
    badges: [
      "NEW!",
      "FEATURED"
    ]
  };

  let component: JobItemCompanyComponent;
  let fixture: ComponentFixture<JobItemCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobItemCompanyComponent],
      imports: [ComponentsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobItemCompanyComponent);
    component = fixture.componentInstance;
    component.company = mockCompanyData;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
