import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  constructor(private http: HttpClient) { }

  transform(products: IProduct[], searchText: string): any[] {
    if(!products){
      return [];
    }
    if(!searchText){
      return products;
    }
    console.log(searchText);

    searchText = searchText.toLocaleLowerCase();
    
    return products.filter(product => product.webDisplayName.includes(searchText));
  }

}
