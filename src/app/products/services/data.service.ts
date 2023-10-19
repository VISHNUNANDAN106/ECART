import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  //api to access all products from products collection- get
  getAllProducts(){
    return this.http.get('http://localhost:3001/products')
  }
//GET SINGLE PRODUCT DATA
  getProduct(id:any){
    return this.http.get('http://localhost:3001/products/'+id)
  }

  //delete
  removeProduct(id:any){
    return this.http.delete('http://localhost:3001/products/'+id)
  }
  // add
  addProduct(bodyData:any){
    return this.http.post('http://localhost:3001/products',bodyData)
  }
  // edit api
  updateProduct(id:any,bodyData:any){
    return  this.http.put('http://localhost:3001/products/'+id,bodyData)
  }

}
