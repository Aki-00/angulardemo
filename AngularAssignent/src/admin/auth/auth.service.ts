import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User,  } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : User;
  logined: false

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['admin/products']);
}

isLogined():boolean{
  var user = this.afAuth.currentUser;

  if (user !=null){
    return true
  }else{
    return false
  }
  // this.afAuth.onAuthStateChanged(function(user) {
  //   if (user) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

}

async logout() {
  return this.afAuth.signOut().then(() => {
    this.router.navigate(['login']);
  })
}

}
