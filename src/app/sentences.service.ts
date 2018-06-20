import { Injectable } from '@angular/core';
import { Sentence } from './model/sentence.model';
import { Category } from './enum/category.enum';
import { TracauService, TracauLang } from './tracau.service';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
@Injectable()
export class SentencesService {
  private sentences: Sentence[];
  getSentences(){
    this.sentences = [
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
    return this.sentences;
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
  fromTracau(){
    let JSON_CALLBACK = function(param: any){
      return param;
    };
    return this.service.lookup(TracauLang.en, 'silkworm')
    .map((response:Response) => eval(response.text()))
    .subscribe(result => console.log(result));
  };
}
