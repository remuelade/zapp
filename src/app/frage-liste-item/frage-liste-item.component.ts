import { Component, Input } from '@angular/core';
import { Frage } from '../shared/frage';

@Component({
  selector: 'a.zp-frage-liste-item',
  templateUrl: './frage-liste-item.component.html',
  styles: []
})
export class FrageListeItemComponent {
  @Input() frage: Frage;
}
