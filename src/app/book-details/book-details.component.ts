import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  book: Book;

  @Output() showListEvent = new EventEmitter<any>();


  showList(){
    this.showListEvent.emit();
  }

  ngOnInit() {
  }

}
