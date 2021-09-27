import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { TranslateResult } from '../../AppModel';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private http: HttpClient) { };

  translate (
    translated: string,
    from: string,
    to: string
  ): Observable<TranslateResult> {
    const url = `https://api.mymemory.translated.net/get?q=${translated}&langpair=${from}|${to}&user=6b6fa0242d739d3c21e3&de=shraybiken@gmail.com`;
    return this.http.get<TranslateResult>(url);
  };
};