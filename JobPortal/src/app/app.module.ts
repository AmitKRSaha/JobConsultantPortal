import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './jobdata/in-memory-data.service';
import { JobService } from './jobdata/job.service';

import { AppComponent } from './app.component';
import { JobShellComponent } from './job-shell/job-shell.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    JobShellComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [JobService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
