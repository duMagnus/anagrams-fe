import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter-option',
  templateUrl: './letter-option.component.html',
  styleUrls: ['./letter-option.component.css']
})

export class LetterOptionComponent {

  @Input()
  letter:string;

}
