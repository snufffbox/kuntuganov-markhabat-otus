import { Component, OnInit } from '@angular/core';

import { DictionaryService, DefaultLang } from "../../services/dictionary/dictionary.service";

import { Translate } from '../../AppModel';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  word: number = 0;

  words: number = 0;

  checkingWord: string = '';

  testing: string = '';

  curTr: Translate = null as any;

  list: Translate[] = [];

  lang: string = '';

  showError = false;

  showSuccess = false;

  isDefaultLang = false;

  constructor(private Dictionary: DictionaryService) {}

  ngOnInit() {
    this.Dictionary.getDictionary().subscribe((res) => {
      this.list = res;

      if (res.length > 0) {
        this.word = 1;

        this.words = res.length;

        this.curTr = res[0];

        this.loadLanguages();
      };
    });

    this.Dictionary.getLanguage().subscribe((res) => {
      this.lang = res;
    });

    if (this.lang === DefaultLang)
      this.isDefaultLang = true;
  };

  loadLanguages() {
    this.checkingWord = this.curTr.values.find (
      (item) => item.lang === DefaultLang
    )?.text as string;
  };

  check() {
    this.showError = false;

    this.showSuccess = false;

    if (
      this.testing.toLowerCase() ===
      this.curTr.values
        .find((item) => item.lang === this.lang)
        ?.text.toLowerCase()
    ) {
      this.showSuccess = true;
    } else {
      this.showError = true;
    }
  };

  goToNext() {
    this.showError = false;

    this.showSuccess = false;

    this.testing = '';
    
    if (this.word === this.words)
      this.word = 1;
    else
      this.word++;

    this.curTr = this.list[this.word - 1];

    this.loadLanguages();
  };

  ngAfterViewInit() {
    this.ngOnInit();
  };
}
