import { Sentence } from "../model/sentence.model";

export interface AbstractSentenceService{
    getSentences();
    addSentence(sentence: Sentence);
    //deleteSentence(sentenceId: string);
   // deleteSentence(sentence: Sentence);
}