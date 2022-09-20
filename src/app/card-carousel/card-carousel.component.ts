import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {

  traits;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  this.traits=this.productService.getJSON();
  }

}
