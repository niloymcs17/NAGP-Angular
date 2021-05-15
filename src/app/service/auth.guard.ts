import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanLoad {

  username = new BehaviorSubject<string>('s');

  constructor(private router: Router){ }

  canActivate() : boolean {
    if(this.loggedIn()){
      return true;
    } else {
      localStorage.setItem('redirect' , this.router.url);
      this.router.navigate(['/login']);
      return false;
    }
  }

  canLoad(): boolean {
    return this.canActivate();
  }

  loggedIn() {
     return !!localStorage.getItem('token');
  }

  login(username: string , password: string) {
    if( this.checkUser(username , password)){
      localStorage.setItem("token", username);
      this.username.next(username);
      return true;
    } else {
      return false;
    }
  }

  checkUser(user: string , pass:string){
    if( user == 'niloy' || pass == 'niloy'){
      return true;
    } else {
      return false;
    }
  }
  
  logout() {
    localStorage.removeItem('token');
  }
  
}
