import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-fave',
  templateUrl: './fave.component.html',
  styleUrls: ['./fave.component.scss']
})
export class FaveComponent implements OnInit {

  constructor(public booksService:BooksService) { }

  ngOnInit(): void {
    this.booksService.loadFavorites()
  }

}
