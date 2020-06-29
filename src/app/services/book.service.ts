import { Book } from './../interface/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.API_URL}/${id}`);
  }
}
