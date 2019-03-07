import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragenlisteComponent } from './fragenliste.component';

describe('FragenlisteComponent', () => {
  let component: FragenlisteComponent;
  let fixture: ComponentFixture<FragenlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragenlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragenlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
