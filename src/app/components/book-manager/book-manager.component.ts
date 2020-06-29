import { BookService } from './../../services/book.service';
import { Book } from './../../interface/book';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css'],
})
export class BookManagerComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      (next) => (this.bookList = next),
      (error) => (this.bookList = [])
    );
  }
}
