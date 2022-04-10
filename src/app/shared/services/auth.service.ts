import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private auth: AngularFireAuth) {
    this.auth.user.subscribe(user => {
      //console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
   }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  getLoggedInUser() {
    return this.auth.user;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log(user);
    return user === null ? false : true;
  }



  logout() {
    return this.auth.signOut();
  }
}
