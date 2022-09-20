import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-ajrakh',
  templateUrl: './ajrakh.component.html',
  styleUrls: ['./ajrakh.component.scss']
})
export class AjrakhComponent implements OnInit {

  traits;
  len;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.traits=this.productService.getJSON();
    this.len=[1,2,3,4];
  }

}
