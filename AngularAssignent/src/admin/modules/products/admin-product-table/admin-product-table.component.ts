import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-admin-product-table',
  templateUrl: './admin-product-table.component.html',
  styleUrls: ['./admin-product-table.component.scss']
})
export class AdminProductTableComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
