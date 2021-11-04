import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, first } from 'rxjs/operators';
import { MovieOrder } from '../../models/movie.model';
import { FilterService } from '../../services/services/filter.service';
import { MovieState, MovieStateAction } from '../../stores/movies/movie.reducer';
import { selectMovieState, selectMovieStateAction } from '../../stores/movies/movie.selector';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

const NAME = 'name';
const ORDER = 'order';

enum MovieSortOrder {
  DEFAULT = 'Default',
  NEWEST_FIRST = 'Newest first',
  OLDEST_FIRST = 'Oldest first',
  NAME_A_Z = 'Name A > Z',
  NAME_Z_A = 'Name Z > A',
}

@UntilDestroy()
@Component({
  selector: 'movie-filter.component',
  templateUrl: 'movie-filter.component.html'
})

export class MovieFilterComponent implements OnInit {

  searchFormControl = this._formBuilder.control('');
  sortFormControl = this._formBuilder.control(MovieSortOrder.DEFAULT);
  sortOptions: {name: string, value: string }[] = [
    {
      name: MovieSortOrder.DEFAULT,
      value: MovieSortOrder.DEFAULT,
    },
    {
      name: MovieSortOrder.NEWEST_FIRST,
      value: MovieSortOrder.NEWEST_FIRST,
    },
    {
      name: MovieSortOrder.OLDEST_FIRST,
      value: MovieSortOrder.OLDEST_FIRST,
    },
    {
      name: MovieSortOrder.NAME_A_Z,
      value: MovieSortOrder.NAME_A_Z,
    },
    {
      name: MovieSortOrder.NAME_Z_A,
      value: MovieSortOrder.NAME_Z_A,
    },
  ];

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _filter: FilterService,
    private _movieStore: Store<MovieState>,
  ) {}

  ngOnInit(): void {
    this._movieStore
    .select(selectMovieState)
    .pipe(first((state) => state.action === MovieStateAction.FILTERS_UPDATED))
    .subscribe((state) => {
      // If we have an order value update the form
      if (state.filters.order) {
        this.sortFormControl.patchValue(state.filters.order);
      }

      // If we have a search value update the form
      if (state.filters.name) {
        this.searchFormControl.patchValue(state.filters.name);
      }

      // Once initial values are set we want to track input changes
      this.searchFormControl.valueChanges
      .pipe(untilDestroyed(this), debounceTime(500))
      .subscribe((search: string) => {
        this.onChangeSearchCriteria(search);
      });

      this.sortFormControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((sorting: MovieSortOrder) => {
        this._onChangeSortCriteria(sorting);
      });
    });

    // We should unsubscribe from this subscription on destroy
    this._movieStore.select(selectMovieStateAction).subscribe((action) => {
      if (action === MovieStateAction.FILTERS_RESET) {
        this._resetInputs();
      }
    });
  }

  onChangeSearchCriteria(search: string): void {
    // Update filters in state
    this._filter.updateMovieFilters(NAME, search);

    // Update url query params - remove name query param if search is empty
    this._filter.updateRouterQueryParams({ name: search.length > 0 ? search : null });
  }

  private _onChangeSortCriteria(sorting: MovieSortOrder): void {
    // Update filters in state
    this._filter.updateMovieFilters(ORDER, sorting);

    // Update url query params if sorting is set to default we remove the order query param
    this._filter.updateRouterQueryParams({
      order: sorting === MovieSortOrder.DEFAULT ? null : sorting,
    });
  }

  private _resetInputs(): void {
    this.searchFormControl.reset('', { emitEvent: false });
    this.sortFormControl.reset(MovieSortOrder.DEFAULT, {
      emitEvent: false,
    });
  }
}
