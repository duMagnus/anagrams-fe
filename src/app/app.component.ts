import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewWord } from './NewWord';

interface DisabledLetters {
  [index: string]: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'anagrams-fe';

  constructor(private http: HttpClient) { }

  useOpenAi = false;

  word: string[];
  
  scrambledWord: string[];

  disabledLetters: DisabledLetters = {}

  guess: string[];

  difficulties = ['Easy', 'Medium', 'Intermediate', 'Challenging', 'Hard', 'Expert', 'Master']

  difficulty = 'Easy';
  
  languages = ['Portuguese', 'English', 'German', 'French']

  language = 'Portuguese'

  isGuessCorrect: boolean = false;

  score: number = 0;

  readonly ROOT_URL = 'http://127.0.0.1:5000'
  
  getNewWord() {
    this.isGuessCorrect = false

    this.scrambledWord = new Array;
    const response = this.http.post<NewWord>(this.ROOT_URL + '/getword', { "difficulty": this.difficulty, "language": this.language, "getFromOpenAi": this.useOpenAi})
    response.subscribe((current) => {
      this.word = Array.from(current.word)
      this.scrambledWord = Array.from(current.scrambledWord)
      this.guess = Array(this.scrambledWord.length).fill('')

      console.log(this.scrambledWord)
      console.log(this.word)
      
      for (let index = 0; index < this.scrambledWord.length; index++) {
        this.disabledLetters[index] = false;
      }
    })
  }

  addLetterToGuess(letter:string) {
    for (let i = 0; i < this.guess.length; i++) {
      if (this.guess[i] == '') {
        this.guess[i] = letter;
        break;
      }
      
    }
    console.log(this.isGuessCorrect)
    this.isGuessRight()
    console.log(this.isGuessCorrect)
  }

  disableButton(i:number) {
    this.disabledLetters[i] = true
  }

  enableButton(letter:string) {
    for (let index = 0; index < this.scrambledWord.length; index++) {
      if (this.scrambledWord[index] === letter && this.disabledLetters[index] === true) {
        this.disabledLetters[index] = false;
      }
      
    }
  }

  isGuessRight() {
    if (this.word.toString() == this.guess.toString()) {
      this.isGuessCorrect = true;
      this.score += this.word.length
    }
  }

  ngOnInit() {
  }

}
