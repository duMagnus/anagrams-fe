import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewWord } from './NewWord';

@Injectable({
  providedIn: 'root'
})
export class WordServiceService {

  readonly ROOT_URL = 'http://127.0.0.1:5000'
  
  newWord: Observable<any>;
  
  constructor(private http: HttpClient) { }

  getNewWord() {
    this.newWord = this.http.post(this.ROOT_URL + '/getword', {'difficulty': 'medium'})
    console.log(this.newWord)
  }

}
