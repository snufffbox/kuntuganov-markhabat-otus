interface ResponseData {
  translatedText: string;
  match: number;
};

interface WordMatches {
  id: number;
  segment: string;
  translation: string;
  reference: string;
  match: number;
};

export interface TranslateResult {
  responseStatus: number;
  responseData: ResponseData;
  matches: WordMatches[];
  responderId: string;
};

interface TranslateData {
  lang: string;
  text: string;
};

export interface Translate {
  id: number;
  date: Date;
  values: TranslateData[];
};