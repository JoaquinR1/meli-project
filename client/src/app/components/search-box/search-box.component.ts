import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache/cache.service';

@Component({
  selector: 'app-search-box',
  styleUrls: ['./search-box.component.scss'],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {

  @Input() text = '';

  @Output() helpClickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  widthPage: any;
  isMobile = true;
  public form: FormGroup;

  constructor( private router: Router, private cacheService: CacheService ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      searchInput: new FormControl(''),
      searchBtn: new FormControl('')
    });
  }

  onSubmit() {
    const searchQuery = this.form.get('searchInput').value;
    if (searchQuery) {
      this.cacheService.set(this.cacheService.constants.SEARCH_QUERY, searchQuery);
      this.router.navigate(['/items']);
    }
  }
}
