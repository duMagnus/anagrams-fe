import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOptionComponent } from './letter-option.component';

describe('LetterOptionComponent', () => {
  let component: LetterOptionComponent;
  let fixture: ComponentFixture<LetterOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterOptionComponent]
    });
    fixture = TestBed.createComponent(LetterOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
