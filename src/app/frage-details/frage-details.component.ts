import { Component, OnInit, Input } from '@angular/core';
import { Frage } from '../shared/frage';
import { FrageServiceService } from '../shared/frage-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormGroup, FormBuilder, FormControl } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'zp-frage-details',
  templateUrl: './frage-details.component.html',
  styleUrls: ['./frage-details.component.css']
})
export class FrageDetailsComponent implements OnInit {
  frage: Frage;
  hinweis: boolean;
  aufgedeckt: boolean;
  aufgedecktfi: boolean;
  richtig: boolean;
  antwortArray: FormArray;
  multiForm: FormGroup;
  singleForm: FormGroup;
  fillinForm: FormGroup;
  antname: FormControl;
  zfalsch: number = 0;
  zrichtig: number = 0;
  zview: number = 0;
  prozent: number = 0;
  anzFragen: number;


  location = { first: false, last: false };

  constructor(
    private fs: FrageServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.params['id'], 10);
    this.frage = this.fs.getSingle(id);
    this.hinweis = false;
    this.aufgedeckt = false;
    this.aufgedecktfi = false;
    this.initFrage();
    this.zfalsch = 0;
    this.zrichtig = 0;
    this.prozent = 0;

  }
  initFrage() {
    this.antwortArray = this.fb.array(this.frage.antwort.map(e => false));
    this.multiForm = this.fb.group({
      antwortArray: this.antwortArray
    })
    this.singleForm = this.fb.group({
      antname: ''
    })

    this.fillinForm = new FormGroup({
      textfeld: new FormControl()
    })
    this.hinweis = false;
    this.aufgedeckt = false;
    this.aufgedecktfi = false;
    this.richtig = false;
    this.zview++;
    this.anzFragen = this.fs.getlaenge();
    this.scripte()
    
  }

  weiter() {
    this.frage = this.fs.getSingle(this.frage.id + 1)
    this.initFrage();
  }

  zurueck() {
    this.frage = this.fs.getSingle(this.frage.id - 1)
    this.initFrage();
  }

  hinweisbutton() {
    if (this.hinweis) {
    } else {
      this.hinweis = true;
    }
  }

  aufdecken() {
    if (this.frage.typ === 'mc') {
      this.aufgedeckt = true;
    } else if (this.frage.typ === 'sc') {
      this.aufgedeckt = true;
    } else if (this.frage.typ === 'fi') {
      this.aufgedecktfi = true;
    }
  }

  pruefen() {
    this.aufdecken();
    let correct = true;

    if (this.frage.typ === 'mc') {
      for (let i = 0; i < this.frage.antwort.length; i++) {
        if (
          this.frage.antwort[i].pruefung !== this.antwortArray.value[i]
        ) {
          correct = false;
        }
      }
    } else if (this.frage.typ === 'sc') {
      if (this.frage.antwort[this.singleForm.controls.antname.value].pruefung === false) {
        correct = false;
      }
    } else if (this.frage.typ === 'fi') {
      if (this.frage.antwort[0].antworttext !== this.fillinForm.controls.textfeld.value) {
        correct = false;
      }
    }

    if (!correct) {
      alert("!!! ACHTUNG!!! \nNICHT RATEN, WISSEN! \nWenn Sie sich nicht sicher sind, wählen Sie HINWEIS oder LERNEN!")
      this.zfalsch++;

    } else {
      this.richtig = true;
      this.aufgedecktfi = false;
      this.zrichtig++;
    }
    this.prozent = (this.zrichtig / this.zview) * 100
  }

  statsfkt() {
    jQuery('.ui.modal')
    .modal('show')
  ;
  }

  scripte() {
    jQuery('#example4')
      .progress('set progress', this.frage.id)
      .progress('set total', this.anzFragen);
      
  }

  onKeydown(event) {
    if (event.key === "ArrowRight") {
      this.weiter();
    } else if (event.key === "ArrowLeft") {
      this.zurueck();
    }
  }
}