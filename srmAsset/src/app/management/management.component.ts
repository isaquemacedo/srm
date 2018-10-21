import { Component, OnInit } from '@angular/core';

import { NotesCanceled } from './management.model'
import { DigitalSignature } from './management.model'
import { ManagementService } from './management.service'

@Component({
  selector: 'srm-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  constructor(private managementService: ManagementService) { }

  notesCanceled: NotesCanceled[]
  digitalSignature:  DigitalSignature[]

  ngOnInit() {
    this.managementService.notesCanceled()
      .subscribe(notesCanceled => this.notesCanceled = notesCanceled);

    this.managementService.digitalSignature()
      .subscribe(digitalSignature => this.digitalSignature = digitalSignature);
  }

}
