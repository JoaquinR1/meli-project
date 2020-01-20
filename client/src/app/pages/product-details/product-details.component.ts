import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  constructor( private router: Router, private route: ActivatedRoute, private appService: AppService ) {
  }

  itemId: string;
  item: {};

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.item = this.appService.mockResponseItemDetails(this.itemId).item;
  }
}
