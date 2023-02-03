import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemDescription } from '../models/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-insert-node',
  templateUrl: './insert-node.component.html',
  styleUrls: ['./insert-node.component.scss']
})
export class InsertNodeComponent implements OnInit {
  insertFrm: FormGroup ;
  product:any

  constructor(private fb: FormBuilder, private ItemsService: ItemsService) { 
    this.insertFrm = this.fb.group({
      id:['',Validators.required], 
      name:['',[Validators.required,Validators.maxLength(8)]], 
      price:[''],
      status:[''],
      sl:['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.insertFrm.invalid)
    {
      return;
    }
    let item = new ItemDescription();

    item.id = this.insertFrm.controls["id"].value;
    item.name = this.insertFrm.controls['name'].value;
    item.price = this.insertFrm.controls["price"].value;
    item.status = this.insertFrm.controls["status"].value;
    item.sl = this.insertFrm.controls["sl"].value;

    this.ItemsService.insertItem(item).subscribe(data=>console.log(data));

  }
  add(){
    this.ItemsService.add(this.insertFrm.value).subscribe(async (res:any)=>{
      await this.product.push(res)
      console.log(this.insertFrm.value)
    });
      
  }
}
