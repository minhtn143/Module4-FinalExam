import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.bookService.getBookById(id).subscribe(
      (next) => (this.book = next),
      (error) => {
        console.log(error);
        this.book = null;
      }
    );
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id);
  }
}
