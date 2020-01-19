import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  constructor( private router: Router ) {
  }

  widthPage: any;
  isMobile: boolean;

  ngOnInit() {
  }
}
