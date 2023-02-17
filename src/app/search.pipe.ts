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
    console.log(products);

    searchText = searchText.toLocaleLowerCase();
    
    const filtered = products.filter(product => product.webDisplayName.toLocaleLowerCase().includes(searchText));
    console.log(filtered);
    return filtered;
  }
}
