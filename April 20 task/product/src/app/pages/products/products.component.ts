import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  options:any[]=[
    "view all",
    "electronics",
    "cosmetics",
    "exercise",
    "books",
    "groceries"
  ]
  type:any="view all";
  
  minimum:number=0;
  maximum:number=1000;

  productlist:any;
  constructor(private hs:ServiceService){
  this.hs.getProducts().subscribe({
    next: (data:any)=>this.productlist=data,
    error:()=>this.productlist=[]
  })
}

}
