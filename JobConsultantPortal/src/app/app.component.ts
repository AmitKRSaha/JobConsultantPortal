import { Component, OnInit } from '@angular/core';
import { JobService } from './jobdata/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JobConsultantPortal';

  constructor(private jobService: JobService) {}

 ngOnInit() {
   this.jobService.getJobs().subscribe(data => console.log(data));
 }
}
