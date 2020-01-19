import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  constructor( private router: Router ) {
  }

  widthPage: any;
  isMobile: boolean;

  ngOnInit() {
  }
}
