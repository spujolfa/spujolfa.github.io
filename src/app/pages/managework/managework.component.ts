import { Component } from '@angular/core';
import { Work } from 'src/app/models/work';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-managework',
  templateUrl: './managework.component.html',
  styleUrls: ['./managework.component.css']
})
export class ManageworkComponent{
  public works: Work[] = [];
  public work: Work;
  public mode: string;
  
  constructor(private firedb: FirebasedbService) { 
    this.work = new Work();
    this.mode = "add";

    this.firedb.getWorks().subscribe( 
      (originalWorks: Work[]) => {
      this.works = originalWorks;
    })
  }

  clearWork(){
    this.mode="add";
    this.work = new Work();
  }
  loadCurrentWork(i: number){
    this.mode = "update";
    this.work = this.works[i];
  }
  addWork() {
    this.work.date = new Date(this.work.date);
    this.firedb.addWork(this.work);
  }
  deleteWork(i: number) {
    this.firedb.deleteWork(this.works[i].id);
  }
  updateWork() {
    this.work.date = new Date(this.work.date);
    this.firedb.updateWork(this.work.id, this.work);
  }
}
