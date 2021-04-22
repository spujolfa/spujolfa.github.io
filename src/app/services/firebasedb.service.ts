import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Work } from '../models/work';

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

  getWorks(): Observable<Work[]> {
    return this.firestore.collection<Work>("work").valueChanges({idField: 'id'});
  }

  addWork(work: Work){
    this.firestore.collection("work").add({
      name: work.name,
      desc: work.desc,
      date: work.date
    })
  }

  deleteWork(id: string) {
    this.firestore.collection("work").doc(id).delete();
  }

  updateWork(id: string, work: Work) {
    this.firestore.collection("work").doc(id).update(work);
  }
}
