import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth) { }
  getCurrentUser(){
    return new Promise<any>((resolve,rejects)=>{
      var user = this.afAuth.onAuthStateChanged(function(user){
        if(user){
          resolve(user);
        }else{
          rejects('No user logged in')
        }
      })
    })
  }
  logout(){
    return new Promise<any>(async (resolve,reject)=>{
      if (await this.afAuth.currentUser){
      //if (this.fauth.auth.currentUser){
  
      this.afAuth.signOut();
      //this.sharing.isUserLoggedIn.next(false);
      resolve("log out");
      }else{
      reject();
      }
  
    })
  }
}
