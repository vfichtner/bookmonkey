import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }

  ngOnInit() {

    this.books = [
      {
        isbn: '123',
        title: 'Principles - Die Gesetze der Gewinner',
        subtitle: 'Das Leben und die Arbeit von Ray Dalio',
        published: new Date(2019,4,30),
        authors: ['Ray Dalio'],
        thumbnails: [{url: 'https://images-na.ssl-images-amazon.com/images/I/41cEbWztZYL._SX331_BO1,204,203,200_.jpg'}]
      },
      {
        isbn: '456',
        title: 'Angular - Grundlagen, ',
        published: new Date(2019,4,30),
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        thumbnails: [{url: 'https://images-na.ssl-images-amazon.com/images/I/51vAuM%2B7jWL._SX342_BO1,204,203,200_.jpg'}]
      }
    ];

  }

}
