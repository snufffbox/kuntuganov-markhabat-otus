import { Injectable } from '@angular/core';
import { Observable, Subscriber } from "rxjs";

import { Translate } from '../../AppModel';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor() {};

  public getDictionary(): Observable<Translate[]> {
    const dictionaries = localStorage.getItem('dictionary');

    const dictionary = dictionaries ? JSON.parse(dictionaries) : [];

    return new Observable((observer: Subscriber<Translate[]>) => {
      observer.next(dictionary);

      observer.complete();
    });
  };

  public setDictionary(dictionary: Translate[]): Observable<boolean> {
    localStorage.setItem('dictionary', JSON.stringify(dictionary));

    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);

      observer.complete();
    });
  };

  getNumberOfWords(): Observable<string> {
    const dataFromStorage = localStorage.getItem('numberOfWords');

    let numberOfWords: string = '5';
    
    if (dataFromStorage) numberOfWords = dataFromStorage;

    return new Observable((observer: Subscriber<string>) => {
      observer.next(numberOfWords);

      observer.complete();
    });
  };

  setNumberOfWords(data: string): Observable<boolean> {
    localStorage.setItem('numberOfWords', data);

    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);

      observer.complete();
    });
  };

  getLanguage(): Observable<string> {
    const dataFromStorage = localStorage.getItem('language');

    let language: string = 'en';

    if (dataFromStorage) language = dataFromStorage;

    return new Observable((observer: Subscriber<string>) => {
      observer.next(language);

      observer.complete();
    });
  };

  setLanguage(data: string): Observable<boolean> {
    localStorage.setItem('language', data);

    return new Observable((observer: Subscriber<boolean>) => {
      observer.next(true);
      
      observer.complete();
    });
  };
};

export const DefaultLang: string = 'en';

export const Languages: string[] = ['ru', 'en'];