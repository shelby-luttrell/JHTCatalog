import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { IProduct } from './product';
import { ProductService } from './ProductService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'JHTCatalog';
  products!: IProduct[];
  searchText!: '';
  constructor(private productService: ProductService) { }

  ngOnInit() {
    try {
      this.productService.getProducts().subscribe(data => {
        console.log(data);
        this.products = data;
      })
    }
    catch{
      console.log("Something happened and we couldn't find your api.")
    }
  }
}

