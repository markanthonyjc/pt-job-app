import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemImageComponent } from './job-item-image.component';
import { ComponentsModule } from '../../../../../components/components.module';

describe('JobItemImageComponent', () => {
  let component: JobItemImageComponent;
  let fixture: ComponentFixture<JobItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobItemImageComponent],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
