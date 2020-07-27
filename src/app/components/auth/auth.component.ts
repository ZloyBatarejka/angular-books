import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthType, IUser} from "../../interface"
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup
  authType: AuthType
  submitted = false;
  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    if(this.form.invalid){
      return;
    }
    const user: IUser = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }
      this.submitted = true;
    this.authService.auth(user,this.authType).subscribe(()=>{
      this.form.reset();
      this.submitted = false;
      this.authService.modal  = false;
      this.route.navigate(['fave'])
    }, ()=>{
      this.submitted = false;
    })
  }
}
