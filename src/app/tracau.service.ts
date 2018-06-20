import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Http } from '@angular/http';


@Injectable()
export class TracauService {
  //use proxy https://github.com/gr2m/CORS-Proxy
  private url = 'http://localhost:1337/api.tracau.vn/WBBcwnwQpV89/{value}/{lang}/JSON_CALLBACK';
  constructor(private service: HttpClient, private httpService:Http) { }
  lookup(lang: TracauLang, value: string){
    let builtUrl:string = this.url.replace('{value}',value).replace('{lang}',lang.toString());
    return this.httpService.get(builtUrl);
  }
  

}
export enum TracauLang{
    en = 'en',
    vi = 'vi'
}

