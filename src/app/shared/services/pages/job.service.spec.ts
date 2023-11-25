import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('JobService', () => {
  let service: JobService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new JobService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a job data object list', (done: DoneFn) => {
    const mockJobData = [
      {
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
      },
      {
        id: 2,
        name: "Fullstack Developer",
        type: "Part Time",
        condition: "Remote",
        company: {
          image: "https://svgshare.com/i/yHa.svg",
          name: "Manage",
          badges: [
            "NEW!",
            "FEATURED"
          ]
        },
        skills: [
          "Fullstack",
          "Midweight",
          "Python",
          "React"
        ],
        publishing: {
          time_elapsed: "1d ago"
        }
      }
    ];

    httpClientSpy.get.and.returnValue(of(mockJobData));

    service.getJobs()
    .subscribe(result => {
      expect(result).toEqual(mockJobData);
      done();
    });
  });

  it('should return error', (done: DoneFn) => {
    const error = new HttpErrorResponse({
      error: "Internal Server Error",
      status: 500, statusText: 'Error'
    });

    httpClientSpy.get.and.returnValue(throwError(error));

    service.getJobs()
    .subscribe(
      result => {},
      error => {
        console.log(error);
        expect(error.status).toBe(500);
        done();
      }
    )

  });
});