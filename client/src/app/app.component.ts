import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from './services/cache/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarketFront';

  constructor( private router: Router, private cacheService: CacheService ) {}

  onSubmitSearch(string) {
    console.log(string);
    this.cacheService.set(this.cacheService.constants.SEARCH_QUERY, string);
    this.router.navigate(['/items']);
  }
}
