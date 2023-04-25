import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(productslist: any, type: string): any {
    if(type=="view All")
      return productslist
    return productslist.filter((product:any)=>product.type==type)
  }

}