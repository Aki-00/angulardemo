import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Product} from '../../models/product';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url : String= 'http://165.22.103.200:8081/api';
  private headers = {headers: {'Content-Type': 'application/json'}};

  constructor(private http: HttpClient, private fr:AngularFirestore) { }
  
  getProducts(){
    return this.fr.collection("products").snapshotChanges();
  }

  createProduct(product: Product){
    return this.fr.collection('products').add(product);
  }

  


  // getProducts(){
  //   return this.http.get(`${this.url}/products`, this.headers);
  // }

  // getProduct(id: any){
  //   return this.http.get(`${this.url}/products/${id}`, this.headers);
  // }

  // getCategoris(){
  //   return this.http.get(`${this.url}/categories`, this.headers)
  // }

  // createProduct(product : Product){
  //   return this.http.post(`${this.url}/products`, product, this.headers )
  // }

}
