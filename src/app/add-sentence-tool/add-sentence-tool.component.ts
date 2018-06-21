import { Component, OnInit } from '@angular/core';
import { Sentence } from '../model/sentence.model';
import { SelectItem } from 'primeng/api';
import { Category } from '../enum/category.enum';
import { SentencesService } from '../sentences.service';
import { TracauLang } from '../tracau.service';

@Component({
  selector: 'app-add-sentence-tool',
  templateUrl: './add-sentence-tool.component.html',
  styleUrls: ['./add-sentence-tool.component.css']
})
export class AddSentenceToolComponent implements OnInit {

  private _sentences: Sentence[];
  private _addingSentence: Sentence = {};
  private _langs: SelectItem[];
  private _categories: SelectItem[] = Category.values();
  private _searchContent: string;
  display: boolean = false;
  constructor(private service: SentencesService) {
    this._sentences = service.getSentences();
    this._langs = service.getLangs();

  }

  ngOnInit() {
    
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
  get searchContent(){
    return this._searchContent;
  }

  isHighlight(item: Sentence){
    return this.sentences.indexOf(item)%2 === 0;
  }
  search(){
    console.log('searchContent: '+this._searchContent);
    this.service.fromTracau(this._searchContent).subscribe(
      result => {
        console.log('fromtracau: '+result);
        this.addToList(result);
    });
  }

  onSave(item: Sentence){
    this.deleteItem(item);
  }

  onDiscard(item: Sentence){
    this.deleteItem(item);
  }
  private deleteItem(item: Sentence) {
    let index = this.sentences.indexOf(item);
    this.sentences.splice(index, 1);
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


