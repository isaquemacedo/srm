import { Component, OnInit, Input } from '@angular/core';

import { MenuItems } from './menuItems.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'srm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuActive: boolean;

  menuItems: MenuItems[]

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.menuItems()
    .subscribe(menuItems => this.menuItems = menuItems)
  }

}
