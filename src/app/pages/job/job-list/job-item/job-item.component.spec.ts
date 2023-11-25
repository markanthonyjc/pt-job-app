import { RenderComponentOptions, render, screen }  from '@testing-library/angular';

import { JobItemComponent } from './job-item.component';
import { ComponentsModule } from '../../../../components/components.module';
import { JobItemImageComponent } from './job-item-image/job-item-image.component';
import { JobItemCompanyComponent } from './job-item-company/job-item-company.component';
import { JobItemInfoComponent } from './job-item-info/job-item-info.component';
import { JobItemSkillComponent } from './job-item-skill/job-item-skill.component';
import { Job } from '../../../../shared/types/job';

describe('JobItemComponent', () => {
  const mockJobData: Job = {
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
      "Senior"
    ],
    publishing: {
      time_elapsed: "1d ago"
    }
  };

  const getRegexInsensitive = (value: string) => new RegExp(value, 'i');
  
  const renderComponentsOptions: RenderComponentOptions<JobItemComponent> = {
    componentInputs: {
      job: mockJobData
    },
    declarations: [
      JobItemImageComponent,
      JobItemCompanyComponent,
      JobItemInfoComponent,
      JobItemSkillComponent
    ],
    imports: [ComponentsModule]
  };
  
  it('should create', async () => {
    const {fixture} = await render(JobItemComponent, renderComponentsOptions);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show provided job company logo', async () => {
    await render(JobItemComponent, renderComponentsOptions);
    const element = screen.getByRole('img', {name: 'Job company logo'});
    expect(element).toBeTruthy();
  });

  it('should show provided job company name', async () => {
    await render(JobItemComponent, renderComponentsOptions);
    const {name} = mockJobData.company;
    const element = screen.queryByText(getRegexInsensitive(name));
    expect(element).toBeTruthy();
  });

  it('should show provided job name', async () => {
    await render(JobItemComponent, renderComponentsOptions);
    const {name} = mockJobData;
    const element = screen.queryByText(getRegexInsensitive(name));
    expect(element).toBeTruthy();
  });

  it('should show provided time elapsed', async () => {
    await render(JobItemComponent, renderComponentsOptions);
    const {time_elapsed} = mockJobData.publishing;
    expect(screen.queryByText(time_elapsed)).toBeTruthy();
  });

  it('should show provided job type', async () => {
    await render(JobItemComponent, renderComponentsOptions);
    const {type} = mockJobData;
    expect(screen.queryByText(type)).toBeTruthy();
  });

  it('should show provided job condition', async () => {
    await render(JobItemComponent, renderComponentsOptions);
    const {condition} = mockJobData;
    expect(screen.queryByText(condition)).toBeTruthy();
  });

  it('should show provided job skill', async () => {
    await render(JobItemComponent, renderComponentsOptions);
    const {skills} = mockJobData;
    skills.forEach(skill => {
      const element = screen.queryByText(skill);
      expect(element).toBeTruthy();
    });
  });
});
