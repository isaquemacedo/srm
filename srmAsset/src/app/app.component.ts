import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'srm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @Input() menuActive: boolean;

  ngOnInit() {
    this.menuActive = false;
  }
}
