import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  // @HostListener('window:resize', ['$event'])
  // /* istanbul ignore next */
  // onResize(event) {
  //   this.widthPage = event.target.innerWidth;
  //   if (this.widthPage <= 768) {
  //     this.isMobile = true;
  //   } else {
  //     this.isMobile = false;
  //   }
  // }

  constructor() {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      searchInput: new FormControl(''),
      searchBtn: new FormControl('')
    });
  }

  onSubmit(event) {
    console.log(event);
  }
}
