import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ProductService } from '../products.service';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-reactive-form',
  templateUrl: './product-reactive-form.component.html',
  styleUrls: ['./product-reactive-form.component.scss']
})
export class ProductReactiveFormComponent implements OnInit {
  constructor(private productService:ProductService, private fb:FormBuilder, private router:Router ) { }

  addProductForm:FormGroup;
  
  ngOnInit(): void {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.addProductForm = this.fb.group({ 
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      finalPrice:['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      regularPrice:['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      imageURL : ['', Validators.required]
    
    });
    console.log(this.addProductForm);
  }

  get f(){

    return this.addProductForm.controls;

  }

    handleAddProduct(){
      console.log(this.addProductForm.get('title').value);
      console.log(this.addProductForm.get('author').value);
      console.log(this.addProductForm.get('publisher').value);
      console.log(this.addProductForm.get('finalPrice').value);
      console.log(this.addProductForm.get('regularPrice').value);
      console.log(this.addProductForm.get('imageURL').value);

      const product:Product ={
        title: this.addProductForm.get('title').value,
        author: this.addProductForm.get('author').value,
        publisher: this.addProductForm.get('publisher').value,
        finalPrice: this.addProductForm.get('finalPrice').value,
        regularPrice: this.addProductForm.get('regularPrice').value,
        imageURL: this.addProductForm.get('imageURL').value,
      }

      console.log(product);

      this.productService.createProduct(product).then(res=>{
        console.log(res);
        if(res){
          this.router.navigateByUrl('/admin/products');
        }

      });

    }

    resetForm(){
      this.addProductForm.reset();
      console.log(this.addProductForm);
    }

   

}
