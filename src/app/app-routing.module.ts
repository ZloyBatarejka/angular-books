import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InfoComponent } from './components/info/info.component';
import { FaveComponent } from './components/fave/fave.component';
import {AuthGuard} from "./services/auth.guard"
const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'info' , component: InfoComponent},
  {path: 'fave' , component: FaveComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
