import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item1, ItemDescription } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  

  constructor(private http: HttpClient) { }
  getItems():Observable <Item1[]>{
    return this.http.get<Item1[]>('http://localhost:8000/api/items/');
  }

  insertItem(item:ItemDescription): Observable<ItemDescription> {
    	//const headers = { 'content-type': 'application/json'} 
    //	console.log(JSON.stringify(item))						
      return this.http.post<ItemDescription>('http://localhost:8000/api/insert/', item);
  }
  deleteItem(item:ItemDescription): Observable<ItemDescription>{
    return this.http.delete<ItemDescription>('http://localhost:8000/api/delete/');
  }
  push(res: any) {
    throw new Error('Method not implemented.');
  }
  add(res: any) {
    return this.http.post<Item1[]>('http://localhost:8000/api/items/',res);
  
  }
  delete(id: number) {
    let params = new HttpParams().set('id', id);

    return this.http.delete('http://localhost:8000/api/delete/' + "product", { params: params });
  }
}
