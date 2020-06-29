import { BookEditComponent } from './components/book-edit/book-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookManagerComponent } from './components/book-manager/book-manager.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { BookCreateComponent } from './components/book-create/book-create.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookManagerComponent,
  },
  {
    path: 'books/create',
    component: BookCreateComponent,
  },
  {
    path: 'books/:id',
    component: BookDetailComponent,
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent,
  },
  {
    path: 'books/:id/delete',
    component: BookDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
