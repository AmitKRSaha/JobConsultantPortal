import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../jobdata/job.service';

@Component({
  selector: 'app-job-shell',
  templateUrl: './job-shell.component.html',
  styleUrls: ['./job-shell.component.css']
})
export class JobShellComponent implements OnInit {

  postedJobs: any;
  cadidatedetails: any;
  interviewdetails: any;

  @Input() opensection;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    let jobId;

    this.jobService.getAllJobs().subscribe(data => {
      jobId = data[0].id;
      this.postedJobs = data;
      this.opensection.postedJobs = 'open';
      this.opensection.shortListed = 'open';
      this.opensection.interview = 'open';
      this.jobService.getShortListedCandidate(jobId).subscribe(candidate => {
        this.cadidatedetails = candidate;
        this.jobService.getInterviewDetails(candidate[0].id).subscribe(inter => {
          this.interviewdetails = inter;
          this.opensection.interview = 'open';
        });
      });
    });
    this.getShortListedCandidate(jobId);
  }

  getPostedJobs(value: string) {
    this.jobService.getJobs(value).subscribe(data => {
      // console.log('From get job method' + data);
      this.postedJobs = data;
      this.opensection.postedJobs = 'open';
      this.opensection.shortListed = 'closed';
      this.opensection.interview = 'closed';
    });
  }

  getShortListedCandidate(value: string) {
    this.jobService.getShortListedCandidate(value).subscribe(data => {
      // console.log('From get candidate method' + data);
      this.cadidatedetails = data;
      this.opensection.shortListed = 'open';
      this.opensection.interview = 'closed';
    });

  }

  getCandidateInterviewDetails(value: string) {
    this.jobService.getInterviewDetails(value).subscribe(data => {
      // console.log('From get interview method' + data);
      this.interviewdetails = data;
      this.opensection.interview = 'open';
    });
  }

  checkChanged(checked: boolean, value: string) {
    console.log(checked ,value);
  }
}
