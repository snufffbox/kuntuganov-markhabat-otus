import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { };

  save(key: string, data: string) {
    if (typeof data === 'object' && data) {
      data = JSON.stringify(data);
    };

    localStorage.setItem(key, data);
  };

  get(key: string): any {
    let data = localStorage.getItem(key);
    
    if (!data) {
      return;
    };

    try { data = JSON.parse(data) }
    catch (e) { console.log(e) };

    return data;
  };
};