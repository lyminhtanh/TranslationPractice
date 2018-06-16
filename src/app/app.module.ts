import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SentenceComponent } from './sentence/sentence.component';
import { TranslatedContentComponent } from './translated-content/translated-content.component';
import { SentencesComponent } from './sentences/sentences.component';
import { SentencesService } from './sentences.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';



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
    DialogModule
  ],
  providers: [
    SentencesService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
