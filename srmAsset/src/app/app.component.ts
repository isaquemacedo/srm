import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'srm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild(MenuComponent) menu;
  @ViewChild(HeaderComponent) header;

  menuActive: boolean;

  constructor() { }

  ngOnInit() {
    this.menuActive = true;
    this.menu.menuActive = this.menuActive;
    this.header.menuActive = this.menuActive;
  }

  toggleMenu() {
    if (this.menuActive) {
      this.menuActive = false;
      this.menu.menuActive = this.menuActive;
      this.header.menuActive = this.menuActive;
    }
    else {
      this.menuActive = true;
      this.menu.menuActive = this.menuActive;
      this.header.menuActive = this.menuActive;
    }
  }

  ngAfterViewInit() {
    this.menu.menuActive = this.menuActive;
    this.header.menuActive = this.menuActive;
  }
}
