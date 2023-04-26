import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(products: any, type: any): any{
    if(type=="view all"){
      return products;
    }
    return products.filter((product:any)=>product.type==type)
  }

}
