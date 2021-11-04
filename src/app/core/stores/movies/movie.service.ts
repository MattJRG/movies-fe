import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  moviesBackendUrl = 'http://localhost:6700';

  constructor(private _http: HttpClient) {}

  // Load
  loadMovies(): Observable<{ movies: Movie[] }> {
    return this._http.get<{ movies: Movie[] }>(`${this.moviesBackendUrl}/`);
  }

  // Add
  addMovie(newMovie: Movie): Observable<{ movies: Movie[] }> {
    return this._http.put<{ movies: Movie[] }>(`${this.moviesBackendUrl}/`, { movie: newMovie});
  }
}
