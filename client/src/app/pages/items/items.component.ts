import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  styleUrls: ['./items.component.scss'],
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  constructor( private router: Router ) {
  }

  widthPage: any;
  isMobile: boolean;

  ngOnInit() {
  }
}
