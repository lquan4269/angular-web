import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { id?: string; name?: string; price?: number ; status?: string; sl?: string}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  items1: Item[]=[];
  config: any;
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('item');
    this.items = this.itemsCollection.valueChanges( { idField: 'key' });
    this.items.subscribe(data=>{ 
      this.items1 = data
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.items1.length
      };
    })
   

  }
  pageChanged(event :number){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
    console.log("Item1:",this.items1);
  }

  add(id: string, name: string, price: number , status : string, sl: string){
    let it : Item = {}; 
    it.id = id;
    it.name = name;
    it.price = price;
    it.status = status;
    it.sl = sl;

    this.itemsCollection.add(it);
    this.add("6","abcd",2000000,"còn hàng","3")
    
  }
  update(docid: string,id: string, name: string, price: number , status : string, sl: string){
    let it : Item = {}; 
    it.id = id;
    it.name = name;
    it.price = price;
    it.status = status;
    it.sl = sl;
    this.itemsCollection.doc(docid).update(it)
  }
  
  deletee(docid: string,id: string, name: string, price: number , status : string, sl: string){
    let it : Item = {}; 
    it.id = id;
    it.name = name;
    it.price = price;
    it.status = status;
    it.sl = sl;
    this.itemsCollection.doc("4").delete();
  }
}
