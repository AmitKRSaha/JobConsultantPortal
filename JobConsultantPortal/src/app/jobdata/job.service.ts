import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { jsonpCallbackContext } from '../../../node_modules/@angular/common/http/src/module';

@Injectable({ providedIn: 'root' })
export class JobService {

  private heroesUrl = 'api/jobs';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getJobs (value: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.heroesUrl}/?name=${value}`)
      .pipe(
        tap(jobs => {
          console.log(jobs);
          jobs = this.filterJobs(value, jobs);
          console.log(jobs);
        }),
        catchError(this.handleError('getJobs', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  filterJobs(filterTerm: string, jobs: any[]) {
    return jobs.filter(function(data) {
      return data.name === filterTerm;
    });
  }

}
