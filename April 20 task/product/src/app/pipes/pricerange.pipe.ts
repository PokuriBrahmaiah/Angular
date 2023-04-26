import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricerange'
})
export class PricerangePipe implements PipeTransform {

  transform(products:any,minimum:number,maximum:number): any{
    return products.filter((product:any)=>(product.price>=minimum)&&(product.price<=maximum))
  }

}
