import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'srm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuActive: boolean;

  constructor() { }

  ngOnInit() {
  }

}
