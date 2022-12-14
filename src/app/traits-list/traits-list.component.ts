import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-traits-list',
  templateUrl: './traits-list.component.html',
  styleUrls: ['./traits-list.component.scss']
})
export class TraitsListComponent implements OnInit {

  traits;
  len;
  showEye:boolean=false;
  hoverIndex:number = -1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.traits=this.productService.getJSON();
    this.len=[1,2,3,4];
    console.log(this.traits);
  }

  onHover(i:number){
    this.hoverIndex = i;
   }
   

}
