import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {NotesCanceled} from './management.model'
import {DigitalSignature} from './management.model'

import {MEAT_API} from '../app.api'
import {ErrorHandle} from '../app.error-handle'

@Injectable()

export class ManagementService {
  constructor(private http: Http) {}

  notesCanceled(): Observable<NotesCanceled[]> {
    return this.http.get(`${MEAT_API}/notesCanceled`)
    .map(response => response.json())
    .catch(ErrorHandle.handleError)
  }

  digitalSignature(): Observable<DigitalSignature[]> {
    return this.http.get(`${MEAT_API}/digitalSignature`)
    .map(response => response.json())
    .catch(ErrorHandle.handleError)
  }
}
