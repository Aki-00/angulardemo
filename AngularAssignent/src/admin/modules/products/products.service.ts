import { Injectable } from '@angular/core';
import { Product} from '../../models/product';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productRef: AngularFirestoreDocument;

  constructor(private fr:AngularFirestore) { }
  
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
  console.log(product.id);
  this.productRef = this.fr.collection('products').doc(product.id);
  var result =  this.productRef.update(product);

}

deleteProduct(id: string){
  this.fr.doc('products/' + id).delete();
}

}
