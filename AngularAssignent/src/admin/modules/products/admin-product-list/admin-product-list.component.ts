import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product} from '../../../models/product'

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  products: Product[] =[];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res.map( e =>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.res()
        } as Product;
      })
  });
  }
}
