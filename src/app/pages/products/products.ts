import { Component } from '@angular/core';
import { Product } from '../../services/product';
import { Products } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Productos {
  productos: Product[] = [];
  constructor(private product: Products) {
    this.productos = this.product.getProducts();
  }
}
