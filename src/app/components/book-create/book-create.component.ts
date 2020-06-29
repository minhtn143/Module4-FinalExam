import { BookService } from 'src/app/services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const { value } = this.bookForm;
      this.bookService.createBook(value);
    }
  }

}
