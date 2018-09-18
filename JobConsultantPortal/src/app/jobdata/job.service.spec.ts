import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';

describe('JobService', () => {
  let service: JobService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [JobService],
      });

      // inject the service
      service = TestBed.get(JobService);
      httpMock = TestBed.get(HttpTestingController);
  });

  it('should be get call for getJobs', () => {
    service.getJobs('amit').subscribe((data: any) => {
      expect(data.name).toBe('Amit');

      const req = httpMock.expectOne(`api/url?anything=1`, 'call to api');
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Amit'
      });
      httpMock.verify();
    });
  });

  it('should be get call for getShortListedCandidate', () => {
    service.getInterviewDetails('amit').subscribe((data: any) => {
      expect(data.name).toBe('Amit');

      const req = httpMock.expectOne(`api/url?anything=1`, 'call to api');
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Amit'
      });
      httpMock.verify();
    });
  });

  it('should be get call for getInterviewDetails', () => {
    service.getInterviewDetails('amit').subscribe((data: any) => {
      expect(data.name).toBe('Amit');

      const req = httpMock.expectOne(`api/url?anything=1`, 'call to api');
      expect(req.request.method).toBe('GET');
      req.flush({
        name: 'Amit'
      });
      httpMock.verify();
    });
  });

});
