import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service"
import { Router } from '@angular/router';
import { BooksService } from './services/books.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService, private route: Router, public bookService: BooksService){}
  logout(){
    this.authService.logout();
    this.route.navigate(['info'])
  }
}
