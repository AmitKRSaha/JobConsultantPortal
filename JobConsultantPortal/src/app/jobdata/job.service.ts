import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JobService {

  private heroesUrl = 'api/jobs';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getJobs (): Observable<any[]> {
    return this.http.get<any[]>(this.heroesUrl)
      .pipe(
        tap(heroes => console.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
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

}
