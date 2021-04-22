import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';
import firebase from 'firebase/app';
import { FirebasedbService } from '../services/firebasedb.service';
import { take} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: firebase.User;
  public loginError: boolean = false;
  public allowedUserError: boolean = false;

  constructor(
    private fireauth: FirebaseauthService, 
    private firestore: FirebasedbService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
      }
    )
  }

  login(){
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        this.firestore.checkAllowedUser(user.user.email).pipe(take(1)).subscribe(
          (originalEmails: any[]) => {
            if (originalEmails.length != 1){
              alert("Usuari no permès");
              this.logout();
            }
          }
        )
      }
    )
  }

  logout(){
    this.user = null;
    this.router.navigate(["/home"]);
  }

}
