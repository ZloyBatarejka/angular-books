import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';

@NgModule({
imports: [HttpClientModule],
exports: [HttpClientModule],
})
export class ComponentsModule {

}
