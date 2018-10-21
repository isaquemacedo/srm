import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {MenuItems} from './menuItems.model'

import {MEAT_API} from '../app.api'
import {ErrorHandle} from '../app.error-handle'

@Injectable()

export class MenuService {
  constructor(private http: Http) {}

  menuItems(): Observable<MenuItems[]> {
    return this.http.get(`${MEAT_API}/menu`)
    .map(response => response.json())
    .catch(ErrorHandle.handleError)
  }
}
