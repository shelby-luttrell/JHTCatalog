import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';
// import { Observable} from "rx
import { SearchPipe } from './search.pipe';
import { Product } from './product';

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
    this.http.get(url).subscribe((response) => {
      this.data = response
      console.log(this.data)
    })
  }
  onFilter() {
    //todo: filter logic
  }

  ngOnInit() {
    this.getData()
  }
}

