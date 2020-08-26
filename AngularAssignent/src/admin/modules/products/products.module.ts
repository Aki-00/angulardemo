import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { AdminProductTableComponent } from './admin-product-table/admin-product-table.component';
import { ProductReactiveFormComponent } from './product-reactive-form/product-reactive-form.component';
import { AdminProductUpdateComponent } from './admin-product-update/admin-product-update.component';


@NgModule({
  declarations: [AdminProductListComponent, AdminProductDetailComponent, AdminProductTableComponent, ProductReactiveFormComponent, AdminProductUpdateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }