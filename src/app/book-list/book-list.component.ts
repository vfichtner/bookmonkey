import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private bookStoreService : BookStoreService){
  }

  ngOnInit(){
    this.books = this.bookStoreService.getAll();
  }

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }

}
