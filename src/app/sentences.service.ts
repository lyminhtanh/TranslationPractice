import { Injectable, OnInit } from '@angular/core';
import { Sentence } from './model/sentence.model';
import { Category } from './enum/category.enum';
import { TracauService, TracauLang } from './tracau.service';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { AbstractSentenceService } from './service/abstract.sentences.service';
import * as _ from 'lodash';

@Injectable()
export class SentencesService implements AbstractSentenceService{
  private sentences: Sentence[] = [
    {
      lang: 'en',
      content: 'example',
      category: Category.ACADEMIC,
      createdUser: 'admin',
      level: 1,
      translatedContent: 'ví dụ'
    },
    {
      lang: 'en',
      content: 'example 1',
      category: Category.BUSINESS,
      createdUser: 'admin',
      level:3,
      translatedContent: 'ví du 1'
    },
    {
      lang: 'en',
      content: 'example 2',
      category: Category.GENERAL,
      createdUser: 'admin',
      level:4,
      translatedContent: 'ví dụ 2'
    }
  ];
  addSentence(sentence: Sentence){
    this.sentences.splice(0, 0, sentence);
  }

  getSentences(){
    return _.cloneDeep(this.sentences);
  }
  getLangs(){
    return  [
      {label:'Select Lang', value:null},
      {label:'English', value:'en'},
      {label:'France', value:'fr'},
      {label:'Korean', value:'kr'}, 
     
  ];
  }
  constructor(private service: TracauService) { }
  fromTracau(searchContent: string){
    let JSON_CALLBACK = function(param: any){
      console.log('param: '+JSON.stringify(param));
      return param;
    };
    return this.service.lookup(TracauLang.en, searchContent)
    .map((response:Response) => eval(response.text()))
    .map((result:string) => result['sentences']);
  };
}
