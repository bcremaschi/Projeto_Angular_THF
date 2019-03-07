import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCardsComponent } from './active-cards.component';

describe('ActiveCardsComponent', () => {
  let component: ActiveCardsComponent;
  let fixture: ComponentFixture<ActiveCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
