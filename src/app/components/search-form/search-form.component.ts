import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../services/books.service"
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISearchData } from 'src/app/interface';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup
  submitted = false;
  maxPages: number
  searchData:ISearchData
  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null,Validators.required),
      author: new FormControl(false)
    })
  }
  submit(){
    if(this.form.invalid){
      return
    }
     this.searchData =  {
      title: this.form.value.title,
      queue: this.form.value.author ? 'inauthor:' : 'search+',
      startIndex: 0
    }
    this.booksService.search(this.searchData).subscribe((data)=>{
      this.maxPages = Math.round(data.totalItems / 10);
    })
  }
  changeIndex(index){
    this.searchData.startIndex+=index;
    this.booksService.search(this.searchData).subscribe()
  }
}


