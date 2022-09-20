import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVcentered: boolean = true;
  @HostListener('window:resize', ['$event'])
  
  onResize(event) {
    if(event.target.innerWidth<769)
      this.isVcentered=false;
    else
      this.isVcentered=true;
  }



}
