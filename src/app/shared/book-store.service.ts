import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  books: Book[];

  constructor() {

    this.books = [
      {
        isbn: '123',
        title: 'Vue.js kurz & gut',
        subtitle: 'Kompakte Einführung für alle, die sich rasch in das beliebte JavaScript-Framework einarbeiten möchten',
        published: new Date(2018,8,12),
        authors: ['Lars Peterke'],
        thumbnails: [{url: 'https://images-na.ssl-images-amazon.com/images/I/41x4yMWVUDL._SX298_BO1,204,203,200_.jpg'}]
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

  getAll() : Book[]{
    return this.books;
  }

}
