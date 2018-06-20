import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SentenceComponent } from './sentence/sentence.component';
import { TranslatedContentComponent } from './translated-content/translated-content.component';
import { SentencesComponent } from './sentences/sentences.component';
import { SentencesService } from './sentences.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RatingModule} from 'primeng/rating';
import { TracauService } from './tracau.service';
import { HttpClient, HttpHandler, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    SentenceComponent,
    TranslatedContentComponent,
    SentencesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DialogModule,
    DropdownModule,
    CardModule,
    InputTextareaModule,
    RatingModule
  ],
  providers: [
    SentencesService,
    TracauService,
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
