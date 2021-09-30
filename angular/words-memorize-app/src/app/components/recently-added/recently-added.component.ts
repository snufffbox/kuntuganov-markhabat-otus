import { Component, OnInit } from '@angular/core';

import { DictionaryService, DefaultLang, Languages } from "../../services/dictionary/dictionary.service";
import { TranslateService } from '../../services/translate/translate.service';
import { Translate } from '../../AppModel';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent implements OnInit {
  protected dictionary;

  srcWord: string = '';

  public translation: any;

  languages = Languages;

  TranslateList: Translate[] = [];

  wordPattern = '[A-Za-z_ ]*$';

  constructor(private fetch: TranslateService)
  {
    this.dictionary = new DictionaryService;
  };
  
  ngOnInit() {
    this.dictionary.getDictionary().subscribe((res) => {
      this.TranslateList = res;
    });
  };

  getTranslation() {
    const words = this.srcWord.split(' ');

    const defaultLang = DefaultLang;

    words.forEach((elem) => {
      const searchWord = this.TranslateList.find (
        (item) =>
          item.values
            .filter((i) => i.lang === defaultLang)[0]
            .text.toLowerCase() === elem.toLowerCase()
      );

      let id: number = null as any;

      if (searchWord) {
        id = searchWord.id;
      } else {
        const last: number = Math.max(...this.TranslateList.map((i) => i.id));

        if (last && last > 0) {
          id = last + 1;
        } else {
          id = 1;
        };

        this.TranslateList.push ({
          id: id,
          date: new Date(),
          values: [{ lang: defaultLang, text: elem }],
        });

        this.dictionary.setDictionary(this.TranslateList);
      };

      this.languages
        .filter((item) => item.toLowerCase() !== defaultLang)
        .forEach((lang) => {
          const updatedWord = this.TranslateList.filter((el) => el.id === id)[0];
          
          const translateExist = updatedWord.values.find((word) => word.lang === lang);
          
          if (!translateExist)
            this.fetch.translate(elem, defaultLang, lang).subscribe((res) => {
              if (res.responseStatus && res.responseStatus === 200) {
                const updatedWord = this.TranslateList.find((el) => el.id === id);

                if (updatedWord) {
                  updatedWord.values.push ({
                    lang: lang,
                    text: res.responseData.translatedText.toLowerCase(),
                  });

                  this.dictionary.setDictionary(this.TranslateList);
                }
              }
            });
        });
    });

    this.dictionary.getDictionary().subscribe((res) => {
      this.TranslateList = res;
    });
  };
};