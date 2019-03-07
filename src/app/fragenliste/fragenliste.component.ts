import { Component, OnInit, Output } from '@angular/core';
import { Frage, ClassAntworten } from '../shared/frage';
import { FrageServiceService } from '../shared/frage-service.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'zp-fragenliste',
  templateUrl: './fragenliste.component.html',
  styles: []
})
export class FragenlisteComponent implements OnInit {
  fragen: Frage[]

  constructor(private fs: FrageServiceService) { }

  ngOnInit() {
    this.fragen = this.fs.getAll();
  }

 
}




