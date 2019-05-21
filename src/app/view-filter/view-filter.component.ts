import { Component, OnInit, EventEmitter, Output } from '@angular/core';


export interface Type {
  value: string;
  label: string;
}

@Component({
  selector: 'app-view-filter',
  templateUrl: './view-filter.component.html',
  styleUrls: ['./view-filter.component.sass']
})
export class ViewFilterComponent implements OnInit {
  types: Type[] = [
    { value: '1', label: 'Machine order' },
    { value: '2', label: 'Process order' }
  ];

  @Output() filterChange = new EventEmitter();
  filter = '';

  filterChanged(value) {
    this.filter = value;
    this.filterChange.emit(this.filter);
  }
  constructor() { }

  ngOnInit() {
  }

}
