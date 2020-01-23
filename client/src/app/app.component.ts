import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from './services/cache/cache.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarketFront';

  constructor( private router: Router, private cacheService: CacheService, private location: Location ) {}

  onSubmitSearch(string) {
    this.cacheService.set(this.cacheService.constants.SEARCH_QUERY, string);
    if (this.location.path() === '/items') {
      location.reload();
    } else {
      this.router.navigate(['/items']);
    }
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }
}
