import { Component, OnInit } from '@angular/core';
import { DictionaryService, DefaultLang, Languages } from "../../services/dictionary/dictionary.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {  
  languages = Languages.filter((lang) => lang !== DefaultLang);

  selected = this.languages[0];

  selectedNo = 20;

  wordsNumber: number = 5;

  wordsNumbers: number[] = [5, 10, 15, 20];

  constructor(private DictionaryService: DictionaryService) { };

  ngOnInit(): void {
    this.DictionaryService.getLanguage().subscribe((res) => {
      this.selected = res;
    });

    this.DictionaryService.getNumberOfWords().subscribe((res) => {
      this.wordsNumber = Number.parseInt(res);
    });
  };

  saveSettings() {
    this.DictionaryService.setLanguage(this.selected);
    this.DictionaryService.setNumberOfWords(this.wordsNumber.toString());
  };
};