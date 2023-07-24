import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSelectedComponent } from './letter-selected.component';

describe('LetterSelectedComponent', () => {
  let component: LetterSelectedComponent;
  let fixture: ComponentFixture<LetterSelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterSelectedComponent]
    });
    fixture = TestBed.createComponent(LetterSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
