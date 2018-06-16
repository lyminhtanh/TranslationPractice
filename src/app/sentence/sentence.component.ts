import { Component, OnInit } from '@angular/core';
import { Sentence } from '../model/sentence.model';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  private _sentence: Sentence;
  constructor() { }

  ngOnInit() {
    
  }
  
  get sentence(){
    return this._sentence;
  }
  set sentence(sentence: Sentence){
    this._sentence = sentence;
  }
}
