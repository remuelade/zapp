import { Injectable } from '@angular/core';
import { Frage, ClassAntworten } from '../shared/frage';
import  * as TomsFragen from '../../assets/fragen_von_tom.json';

@Injectable()

export class FrageServiceService {
  fragen: Frage[]

  constructor() {
    this.fragen = TomsFragen.default
    // this.fragen = [
    //   new Frage(
    //     1,
    //     'Wie heißt der Bürgermeister von Wesel?',
    //     'Das fleißige Nutztier!', [
    //       new ClassAntworten(1, 'Esel', true),
    //       new ClassAntworten(2, 'Wedel', false),
    //       new ClassAntworten(3, 'Knebel', false),
    //       new ClassAntworten(4, 'Säbel', false),
    //       new ClassAntworten(5, 'Demel', false),],
    //     'sc'
    //   ),

    //   new Frage(
    //     2,
    //     'Was wird naßer, wenn es trocknet?',
    //     'Towly das kiffende Handtuch!', [
    //       new ClassAntworten(1, 'Auto', false),
    //       new ClassAntworten(2, 'Tennisschläger', false),
    //       new ClassAntworten(3, 'Handtuch', true),
    //       new ClassAntworten(4, 'Briefmarkensammlung', false),
    //       new ClassAntworten(5, 'Fön', false),],
    //     'sc'
    //   ),

    //   new Frage(
    //     3,
    //     'Wie heißt die Hauptstadt von England?',
    //     'Der Big Ben steht hier!', [
    //       new ClassAntworten(1, 'Manchester', false),
    //       new ClassAntworten(2, 'London', true),
    //       new ClassAntworten(3, 'Birmingham', false),
    //       new ClassAntworten(4, 'Dudleytown', false),
    //       new ClassAntworten(5, 'Hogwards', false),],
    //     'sc'
    //   ),

    //   new Frage(
    //     4,
    //     'Wie viele Monde hat die Erde?',
    //     '123412634891263489 - 123412634891263488', [
    //       new ClassAntworten(1, 'Sieben', false),
    //       new ClassAntworten(2, 'Vier', false),
    //       new ClassAntworten(3, 'Zwei', false),
    //       new ClassAntworten(4, 'Einen', true),
    //       new ClassAntworten(5, 'Sechs', false),],
    //     'sc'
    //   ),

    //   new Frage(
    //     5,
    //     'Wieviel Ecken hat ein Viereck?',
    //     '100 in Binär', [
    //       new ClassAntworten(1, 'Eine', false),
    //       new ClassAntworten(2, 'Zwei', false),
    //       new ClassAntworten(3, 'Drei', false),
    //       new ClassAntworten(4, 'Vier', true),
    //       new ClassAntworten(5, 'Fünf', false),],
    //     'sc'
    //   ),

    //   new Frage(
    //     6,
    //     'Was braucht man für ein Spezi-Getränk?',
    //     'Schwarz/Gelb', [
    //       new ClassAntworten(1, 'Orangenlimo', true),
    //       new ClassAntworten(2, 'Zitronenlimo', false),
    //       new ClassAntworten(3, 'Erdbeerlimo', false),
    //       new ClassAntworten(4, 'Cola', true),
    //       new ClassAntworten(5, 'Wasser', false),],
    //     'mc'
    //   ),

    //   new Frage(
    //     7,
    //     'Was heißt Hallo auf Englisch?',
    //     'a to the e', [
    //       new ClassAntworten(1, 'Hello', true),
    //       ],
    //     'fi'
    //   )
    // ];
  }
  getAll() {
    return this.fragen;
  }

  getSingle(id: number) {
    let position = this.fragen.map(e => e.id).indexOf(id);
    const frage = this.fragen[position];
    frage.first = position == 0 ? false : true;
    frage.last = position == this.fragen.length - 1 ? false : true;
    return frage;
  }

  getlaenge() {
    return this.fragen.length
  }
}