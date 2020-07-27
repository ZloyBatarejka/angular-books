import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultsComponent } from './components/results/results.component';
import { FaveComponent } from './components/fave/fave.component';
import { MainComponent } from './components/main/main.component';
import { InfoComponent } from './components/info/info.component';
import { AuthComponent } from './components/auth/auth.component';
import { BooksService } from './services/books.service';
import {ComponentsModule} from "./components/components.module"
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultsComponent,
    FaveComponent,
    MainComponent,
    InfoComponent,
    AuthComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule

  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
