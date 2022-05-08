import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {User} from "../class/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  user?:any;
  constructor(private db:AngularFirestore, public fAuth: AngularFireAuth, public router:Router, public ngZone:NgZone) {
    this.fAuth.authState.subscribe((user) => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  //SignIn email and password
  SignIn(email: string, password: string){
    return this.fAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['profile']);
      });
      //this.SetUserData(result.user, name);
      this.user = this.GetUserData(result.user);
      if(this.user){
        localStorage.setItem('user', JSON.stringify(this.user));
        JSON.parse(localStorage.getItem('user')!);
        this.router.navigate(['profile']);
      }else {
        this.router.navigate(['']);
      }
    })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  //SignUp with email / password
  SignUp(email: string, password: string, name : string) {
    return this.fAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.SendVerificationMail();
      this.SetUserData(result.user, name);
    })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  //Send email verification
  SendVerificationMail() {
    return this.fAuth.currentUser.then((u: any) => u.sendEmailVerification()).then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }

  //Reset password
  ForgotPassword(passwordResetEmail: string){
    return this.fAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
      window.alert("Se ha enviado una contraseña para resetear, verifique su email.");
    })
      .catch((error) => {
        window.alert(error);
      });
  }

  //Return true when the user is logged
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') !);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  SetUserData(user : any, name : string) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName : name,
      emailVerified : user.emailVerified,
      //photo : user.photo,
    }

    return userRef.set(userData, {
      merge : true,
    });
  }

  //Get user data
  GetUserData(user : any) {
    return new Promise<any>((resolve) => {
      this.db.collection("users", ref =>
        ref.where('uid', '==', user.uid))
        .valueChanges().subscribe(users => resolve(users))
    })
  }

  //Sign Out
  SignOut() {
    return this.fAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    });
  }
}
