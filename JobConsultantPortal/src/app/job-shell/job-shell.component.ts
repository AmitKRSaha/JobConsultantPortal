import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../jobdata/job.service';

@Component({
  selector: 'app-job-shell',
  templateUrl: './job-shell.component.html',
  styleUrls: ['./job-shell.component.css']
})
export class JobShellComponent implements OnInit {

  postedJobs: any;

  @Input() opensection;

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  getPostedJobs(value: string) {
    this.jobService.getJobs().subscribe(data => {
      console.log(data);
      this.postedJobs = data;
      this.opensection.postedJobs = 'open';
      this.opensection.shortListed = 'closed';
      this.opensection.interview = 'closed';
    });
  }

  getShortListedCandidate() {

    alert('ok');
  }
}
