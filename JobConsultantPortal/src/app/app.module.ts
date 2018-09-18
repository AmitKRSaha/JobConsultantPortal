import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './jobdata/in-memory-data.service';
import { JobService } from './jobdata/job.service';

import { AppComponent } from './app.component';
import { JobShellComponent } from './job-shell/job-shell.component';
import { ShortlistCandidateComponentComponent } from './job-shell/shortlist-candidate-component/shortlist-candidate-component.component';
import { RoundsofinterviewComponent } from './job-shell/roundsofinterview/roundsofinterview.component';

@NgModule({
  declarations: [
    AppComponent,
    JobShellComponent,
    ShortlistCandidateComponentComponent,
    RoundsofinterviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
