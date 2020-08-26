import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Product} from '../../models/product';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url : String= 'http://165.22.103.200:8081/api';
  private headers = {headers: {'Content-Type': 'application/json'}};
  private productRef: AngularFirestoreDocument;

  constructor(private http: HttpClient, private fr:AngularFirestore) { }
  
  getProducts(){
    return this.fr.collection("products").snapshotChanges();
  }

  createProduct(product: Product){
    return this.fr.collection('products').add(product);
  }

//   updateProduct(product: Product){
//    delete product.id;
//    this.fr.doc('products/' + product.id).update(product);
// }

async updateProduct(product:Product){
  this.productRef = this.fr.collection('products').doc(product.id);
  var result =  this.productRef.update(product);

}

deleteProduct(id: string){
  this.fr.doc('products/' + id).delete();
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
