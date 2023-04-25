import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { homeStyles, productStyles } from 'src/app/styles';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent {
  @Input() products:any=[];
  //@Input() value1:any;
  //@Input() value2:any;
  stylesp=productStyles;
  styles=homeStyles
  options:string[]=[
    "view All",
    "Books",
    "cosmetics",
    "electronics",
    "groceries",
    "jewels",
    "outfits",
    "toys"
  ]
  type:string="view All";
  value1:number=0;
  value2:number=105000;
  servicelist:any;
service: any;
  constructor(private hs:CategoryService){
    this.hs.getServices().subscribe(
      {
        next: (data:any)=> this.servicelist =data,
        error: ()=> this.servicelist=[]
      }
    )
  }
  onMouseEnter(cardbox: HTMLElement){
    cardbox.style.transform="scale(1.03)",
    cardbox.style.transition="transform .4s"
    cardbox.style.color="#e60790"
    cardbox.style.cursor="pointer"
  }
  onMouseLeave(cardbox: HTMLElement){
    cardbox.style.transform="scale(1.0)"
    cardbox.style.color="black"
  }


}