import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.scss']
})
export class AdminProductDetailComponent implements OnInit {

  constructor(private productService:ProductService, private router:ActivatedRoute, private _router:Router) { }

  product:Product
  products:Product[]
  
  ngOnInit(): void {
    this.router.params.subscribe((res: any) => {
      const id = res.id;
      // this.productService.getProduct(id).subscribe((res:any)=>{
      //   this.product = res;
      //   console.log(res);

      // });
      
      this.productService.getProducts().subscribe((res: any) => {
        console.log(res);
        this.products = res.map( e =>{
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Product;   
        })
        
        this.product = this.products.filter(x=> x.id==id)[0];
    });

      // this.productService.getProducts().subscribe((res:any)=>{
      //   const product = res.filter(x => x.id==id)[0];
      //     this.product = product;
  
      // });
      
    
    })
  }

  onDelete(){
    this.productService.deleteProduct(this.product.id);
    this._router.navigateByUrl('/admin/products');
    console.log(this.product.id)

  }

}
