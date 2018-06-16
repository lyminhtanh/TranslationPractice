import { Component, OnInit } from '@angular/core';
import { Sentence } from '../model/sentence.model';
import { SentencesService } from '../sentences.service';
import {DialogModule} from 'primeng/dialog';


@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {
  private _sentences: Sentence[];
  display: boolean = false;
  constructor(service: SentencesService) {
    this._sentences = service.getSentences();
  }

  ngOnInit() {
    
  }

  get sentences() {
    return this._sentences;
  }

  addSentence(sentence: Sentence){
    this._sentences.splice(0, 0, sentence);
  }
  showDialog(){
    this.display = !this.display;
  }
}
