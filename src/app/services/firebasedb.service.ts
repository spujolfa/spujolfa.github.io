import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) { }

  checkAllowedUser(email: string): Observable<any> {
    return this.firestore.collection("allowed_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref: any){
    return ref.where("email", "==", email);
  }
}
