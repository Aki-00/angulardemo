import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.scss']
})
export class AdminProductUpdateComponent implements OnInit {

  constructor(private productService:ProductService, private fb:FormBuilder, private _router:Router, private router:ActivatedRoute) { 
    this.updateProductForm = this.fb.group({ 
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      finalPrice:['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      regularPrice:['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      imageURL : ['', Validators.required]
    
    });
  }

  updateProductForm:FormGroup;
  product:Product;
  products:Product[];

  ngOnInit(): void {
    this.router.params.subscribe((res: any) => {
      console.log(res);
      const id = res.id;
      
      this.productService.getProducts().subscribe((res: any) => {
        console.log(res);
        this.products = res.map( e =>{
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Product;   
        })
        
        this.product = this.products.filter(x=> x.id==id)[0];

        this.updateProductForm.setValue({
  
          title: this.product.title,
          author: this.product.author,
          publisher: this.product.publisher,
          finalPrice: this.product.finalPrice,
          regularPrice: this.product.regularPrice,
          imageURL: this.product.imageURL
        })

        console.log(this.updateProductForm);
    
});
    })

}

handleUpdateProduct(){
  // console.log(this.updateProductForm.get('title').value);
  // console.log(this.updateProductForm.get('author').value);
  // console.log(this.updateProductForm.get('publisher').value);
  // console.log(this.updateProductForm.get('finalPrice').value);
  // console.log(this.updateProductForm.get('regularPrice').value);
  // console.log(this.updateProductForm.get('imageURL').value);

  const product:Product ={
    title: this.updateProductForm.get('title').value,
    author: this.updateProductForm.get('author').value,
    publisher: this.updateProductForm.get('publisher').value,
    finalPrice: this.updateProductForm.get('finalPrice').value,
    regularPrice: this.updateProductForm.get('regularPrice').value,
    imageURL: this.updateProductForm.get('imageURL').value,
  }

  console.log(product);

  this.productService.updateProduct(product);
     this._router.navigateByUrl('/admin/products');
   
  };

resetForm(){
  this.updateProductForm.reset();
  console.log(this.updateProductForm);
}


}
