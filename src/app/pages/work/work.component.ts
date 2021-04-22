import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent{

  public works: Work[] = [];
  
  constructor(private firedb: FirebasedbService) { 

    this.firedb.getWorks().subscribe( 
      (originalWorks: Work[]) => {
      this.works = originalWorks;
    })
  }
}
