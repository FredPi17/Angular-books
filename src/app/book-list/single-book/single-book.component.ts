import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {BooksService} from '../../services/books.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: Book;


  constructor(private booksService: BooksService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
        (book: Book) => {
          this.book = book;
        }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
