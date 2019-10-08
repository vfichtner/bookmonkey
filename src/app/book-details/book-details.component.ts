import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService){
  }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.book = this.bs.getSingle(params.get('isbn'));
  }

}
