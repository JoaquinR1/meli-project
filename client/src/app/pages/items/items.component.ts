import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-items',
  styleUrls: ['./items.component.scss'],
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {

  constructor( private router: Router, private appService: AppService ) {
  }

  items = {};

  ngOnInit() {
    this.items = this.appService.mockResponseItems();
  }
}
