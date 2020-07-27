import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { IBookPreview } from 'src/app/interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.loadFavorites()
  }
  isAdded(id){
    const presense = this.booksService.faveBooks.filter(item=>item.id===id);
    return !presense.length
  }
}
