import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { SharingService } from './sharing.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private sharingSrv: SharingService,
    private router:Router
  ) { }

  
  async signinGmail(){
    var provider = new firebase.auth.GoogleAuthProvider();
    return await  this.afAuth.signInWithPopup(provider)
            .then(res=>{
              this.sharingSrv.isUserLoggedIn.next(true);
              console.log(" da dang nhap thanh cong")
      })
  }
  signin(email: string, password:string){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
      
      .then(res => {       
        console.log(res)
      resolve(res);
      this.sharingSrv.isUserLoggedIn.next(true);
      }, err => reject(err))
    })
  }
  signup(email:string,password:string){
		return new Promise<any>((resolve, reject)=>{
			this.afAuth.createUserWithEmailAndPassword(email,password)
			  .then(res => {
          console.log(res)
				resolve(res);
			  }, err =>reject(err))
		  })
	}
  
}
