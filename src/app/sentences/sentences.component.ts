import { Component, OnInit } from '@angular/core';
import { Sentence } from '../model/sentence.model';
import { SentencesService } from '../sentences.service';
import {DialogModule} from 'primeng/dialog';
import {SelectItem} from 'primeng/api';
import { Category } from '../enum/category.enum';
import { TracauLang } from '../tracau.service';



@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {
  private _sentences: Sentence[];
  private _addingSentence: Sentence = {};
  private _langs: SelectItem[];
  private _categories: SelectItem[] = Category.values();
  display: boolean = false;
  constructor(private service: SentencesService) {
    this._sentences = service.getSentences();
    this._langs = service.getLangs();

  }

  ngOnInit() {
    setInterval(() => {
      this._sentences = this.service.getSentences();
      console.log(this._sentences.length);
    },5000);
  }

  get sentences() {
    return this._sentences;
  }

  get addingSentence(){
    return this._addingSentence;
  }

  get langs(){
    return this._langs;
  }

  get categories(){
    return this._categories;
  }
  addSentence(sentence: Sentence){
    this._sentences.splice(0, 0, sentence);
  }
  showDialog(){
    this.display = !this.display;
  }

  onAdd(){
    this.service.fromTracau('silkworm').subscribe(
      result => {
        console.log('fromtracau: '+result);
        this.addToList(result);
      });
    //console.log(tracauResult);
   // this._sentences.splice(0, 0, this._addingSentence);
    //this._addingSentence = {};
    this.display = false;
  }
  fetch(){
    this._sentences = this.service.getSentences();
  }
  private addToList(result){
    console.log('result: '+result);
    result.forEach((object:TracauResponse) => {
      console.log('object: '+object._id);
      console.log('object: '+object.fields.en);

      let newSentence:Sentence = {};
      newSentence.lang = TracauLang.en.toString();
      newSentence.content = object.fields.en;

      newSentence.translatedContent = object.fields.vi;
      this._sentences.splice(0, 0, newSentence);
    })
  }
}
interface TracauResponse{
    '_id'?: string;
    'fields'?: {
      en: string;
      vi: string;
    }
}