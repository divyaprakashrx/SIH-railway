import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ElementSchemaRegistry } from '@angular/compiler';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, CanActivate {
  constructor( private db: AngularFireDatabase, private router: Router) {
  }
  x: '/';
  hide = true;
  open = true;
  login = `divya123`;
  password = `1234`;
  onSubmit(form: NgForm){
    if ( (form.value.id === this.login) && (form.value.password === this.password) ){
      console.log(`done`);
      this.open = true;
      this.router.navigate([`/timer`]);
    }
    else{
      alert(`Enter correct details`);
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.open;
  }
  ngOnInit(): void {}
}
