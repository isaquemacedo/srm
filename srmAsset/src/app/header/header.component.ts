import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'srm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() menuActive: boolean;

  constructor() { }

  ngOnInit() {
  }

}
