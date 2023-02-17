import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';
// import { Observable} from "rx
import { SearchPipe } from './search.pipe';
import { IProduct } from './product';
import { ProductService } from './ProductService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JHTCatalog';
  // public json: any = []
  products!: IProduct[];
  searchText!: '';
  // product: IProduct = new IProduct();
  constructor(private productService: ProductService) { }

  // getJson() {
  //   const url = 'https://63e27e3bad0093bf29d15131.mockapi.io/api/product'
  //   this.http.get(url).subscribe((response) => {
  //     this.json = response
  //     console.log(this.json)
  //   })
  // }

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

