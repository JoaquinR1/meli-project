import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { CacheService } from 'src/app/services/cache/cache.service';

@Component({
  selector: 'app-items',
  styleUrls: ['./items.component.scss'],
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {

  constructor( private router: Router, private appService: AppService, private cacheService: CacheService ) {
  }

  search = '';
  items = {};
  pageReady = false;

  ngOnInit() {
    this.search = this.cacheService.get(this.cacheService.constants.SEARCH_QUERY);
    if (this.search) {
      this.appService.getItems(this.search).subscribe((res) => {
        this.items = res;
        this.pageReady = true;
      });
    }
  }

  onItemClick(id) {
    this.router.navigate([`items/${id}`]);
  }
}
