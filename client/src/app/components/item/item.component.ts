import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item',
  styleUrls: ['./item.component.scss'],
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {

  @Input() item;

  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  onItemClick() {
    this.itemClick.emit(this.item.id);
  }
}
