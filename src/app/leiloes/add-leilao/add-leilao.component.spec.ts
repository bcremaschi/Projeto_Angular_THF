import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeilaoComponent } from './add-leilao.component';

describe('AddLeilaoComponent', () => {
  let component: AddLeilaoComponent;
  let fixture: ComponentFixture<AddLeilaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeilaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeilaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
