import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'garment-task';
  typeView = '1';

  displayFilter(type) {
    this.typeView = type;
  }

}
