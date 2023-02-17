import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: HttpClient) { }

  transform(products: Product[]) {
    return products.filter(product => product.webDisplayName);
  }

}
