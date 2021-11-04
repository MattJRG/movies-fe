import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isEmpty } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { MovieState } from '../../stores/movies/movie.reducer';
import * as MovieActions from '../../stores/movies/movie.actions';


@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _filtersAppliedSubject$ = new BehaviorSubject<boolean>(
    !isEmpty(this._route.snapshot.queryParams),
  );
  filtersApplied$ = this._filtersAppliedSubject$.asObservable();

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private _movieStore: Store<MovieState>,
  ) {}

  updateMovieFilters(key: string, value: unknown): void {
    this._movieStore.dispatch(
      MovieActions.updateFiltersWithKeyValue({ key, value }),
    );
  }

  // Update url without refreshing the page
  updateRouterQueryParams(queryParams: unknown): void {
    this._router
      .navigate([], {
        relativeTo: this._route,
        queryParams,
        queryParamsHandling: 'merge',
      })
      .then(() => {
        this._filtersAppliedSubject$.next(!isEmpty(this._route.snapshot.queryParams));
      });
  }
}
