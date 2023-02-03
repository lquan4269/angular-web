import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Observable } from 'rxjs';
import { Item1 } from '../models/item';


@Component({
  selector: 'app-item-node',
  templateUrl: './item-node.component.html',
  styleUrls: ['./item-node.component.scss']
})
export class ItemNodeComponent implements OnInit {
  items: Observable<Item1[]>;

  constructor(ItemsService: ItemsService) {

    this.items = ItemsService.getItems();
   }


  ngOnInit(): void {
  }

  

}
