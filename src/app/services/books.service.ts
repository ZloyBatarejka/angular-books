import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs"
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {IGoogleApiResponse, IBookPreview, IBook, IDbAnswer} from "../interface"
@Injectable()
export class BooksService {
  books:IBookPreview[] = []
  book:IBook = null;
  token = localStorage.getItem('fb-token') ?  localStorage.getItem('fb-token').slice(0,6) : null;
  faveBooks:IBookPreview[] = []
  constructor(public http: HttpClient) {

  }
  search({title,queue,startIndex}): Observable<any>{
     return this.http.get<IGoogleApiResponse>(`${environment.googleUrl}${queue}${title}&startIndex=${startIndex}`)
     .pipe(
       map(response=>{
         this.books = [];
          response.items.map(item=>{
              const book:IBookPreview = {
                id: item.id,
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Автор неизвестен",
                date: item.volumeInfo.publishedDate,
                img:  item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo7oNU_XuBeOyfQHAnPFSfhzO9nyf6AF6rPQ&usqp=CAU',
              }
              this.books.push(book)
          })
          return {totalItems: response.totalItems};
       })

     )
  }
  getBook(id:string){
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .subscribe((item)=>{
           const book:IBook = {
             id: item.id,
             title: item.volumeInfo.title,
             author: item.volumeInfo.authors ? item.volumeInfo.authors : "Автор неизвестен",
             date: item.volumeInfo.publishedDate,
             img:  item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo7oNU_XuBeOyfQHAnPFSfhzO9nyf6AF6rPQ&usqp=CAU',
             description: item.volumeInfo.description,
             pagesCount: item.volumeInfo.printedPageCount,
             link: item.saleInfo.buylink
           }
           this.book = book;
      },
      ()=>{})
  }
  addBook(book:IBookPreview){

    if(!this.token){
      console.log("Уходи отсюда, мужик")
      return;
    }
    this.http.post(`${environment.fbDbUrl}${this.token}.json`,book)
    .subscribe(()=>{
      this.faveBooks.push(book)
    })
  }
  loadFavorites(){
    if(!this.token){
      console.log("Уходи отсюда, мужик")
      return;
    }
    this.http.get<IBookPreview[]>(`${environment.fbDbUrl}${this.token}.json`).subscribe((answer)=>{
      this.faveBooks = Object.values(answer).map(item=>item)
      Object.keys(answer).forEach((key,index)=>{
        this.faveBooks[index].fbId = key;
      })
    })
  }
  deleteFavorite(id:string){
    if(!this.token){
      console.log("Уходи отсюда, мужик")
      return;
    }
    this.http.delete(`${environment.fbDbUrl}/${this.token}/${id}.json`).subscribe((response)=>{
      console.log(response)
      this.faveBooks = this.faveBooks.filter(item=>item.fbId !== id)
    })
  }
}


