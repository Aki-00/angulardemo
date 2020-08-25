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
      name: ['', Validators.required],
      category: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: ['', Validators.required],
      image: ['',Validators.required]
    });
    console.log(this.addProductForm);
  }

  get f(){

    return this.addProductForm.controls;

  }

    // handleAddProduct(){
    //   console.log(this.addProductForm.get('name').value);
    //   console.log(this.addProductForm.get('category').value);
    //   console.log(this.addProductForm.get('price').value);
    //   console.log(this.addProductForm.get('image').value);

    //   const product:Product ={
    //     name: this.addProductForm.get('name').value,
    //     category_id: this.addProductForm.get('category').value,
    //     sell_price: this.addProductForm.get('price').value,
    //     image: this.addProductForm.get('image').value,
    //   }

    //   console.log(product);

  

    //   this.productService.createProduct(product).subscribe((res)=>{
    //     console.log('res', res);
    //     if(res){
    //       this.router.navigateByUrl('/admin/products')
    //     }
    //   }
    //   )

    // }

    resetForm(){
      this.addProductForm.reset();
      console.log(this.addProductForm);
    }

   

}
