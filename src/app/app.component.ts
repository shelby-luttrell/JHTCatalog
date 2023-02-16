
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';

export interface Product {
  id: string;
  webDisplayName: string;
  heroImage: string;
  dataCreated: string;
  tag: string;
}

interface ApiResults {
  total: string;
  results: Array<Product>
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JHTCatalog';
  public data: any = []
  constructor(private http: HttpClient) {
  }

  getData() {
    const url = 'https://63e27e3bad0093bf29d15131.mockapi.io/api/product'
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
  }

  ngOnInit() {
    this.getData()
  }
}
  //   this.products$ = this.http
  //     .get<Product[]>("https://63e27e3bad0093bf29d15131.mockapi.io/api/product")
  //     .map((data: any) => _.values(data))
  //     .do(console.log);
  // }
  // onSearch(value: string) {
  //   console.log(value);
  // }
