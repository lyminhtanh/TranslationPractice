import { Injectable } from '@angular/core';
import { Sentence } from './model/sentence.model';

@Injectable()
export class SentencesService {
  private sentences: Sentence[];
  getSentences(){
    this.sentences = [
      {
        lang: 'en',
        content: 'example',
        category: 'cate 1',
        createdUser: 'admin',
        level:'easy',
        translatedContent: 'ví dụ'
      },
      {
        lang: 'en',
        content: 'example 1',
        category: 'cate 2',
        createdUser: 'admin',
        level:'hard',
        translatedContent: 'ví du 1'
      },
      {
        lang: 'en',
        content: 'example 2',
        category: 'cate 3',
        createdUser: 'admin',
        level:'medium',
        translatedContent: 'ví dụ 2'
      }
    ];
    return this.sentences;
  }
  constructor() { }
  

}
