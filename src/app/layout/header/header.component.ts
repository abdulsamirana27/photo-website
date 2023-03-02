import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/productservice";
import {Product} from "../../models/product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value?: Date;
  responsiveOptions;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
      this.products = products;
    });
  }

}
