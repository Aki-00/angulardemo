import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import * as firebase from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User,  } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : User;
  private _isLogined: boolean;
  private _isAdmin:boolean;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        this._isLogined = true;
        localStorage.setItem('user', JSON.stringify(this.user));
        firebase
        .firestore()
        .doc(`/users/${user.uid}`)
        .get()
        .then(userProfileSnapshot => {
           this._isAdmin = userProfileSnapshot.data().isAdmin;  
        });
        console.log("admin?", this._isAdmin);
        
      } else {
        this._isLogined = false;
        localStorage.setItem('user', null);
      }
    })
  }


//   async login(email: string, password: string) {
//     var result = await this.afAuth.signInWithEmailAndPassword(email, password)
//     this.router.navigate(['admin/products']);
// }

async login(email: string, password: string) {
  try {
      await  this.afAuth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['admin/products']);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }


get isLogined():boolean{
  
  return this._isLogined;

}

async logout() {
  return this.afAuth.signOut().then(() => {
    this.router.navigate(['login']);
  })
}

get isAdmin():boolean{    
        console.log(this._isAdmin);
       
        return this._isAdmin;
        
    };
 

// return this.user.pipe(
//   take(1),
//   map(user => user && user.admin),
//   tap(isAdmin => {
//     if (!isAdmin) {
//       console.error('Access denied - Admins only');
// // re-route to wherever you want 
//       this.router.navigate(['login']); 
//     }
//   })
// );
}


