import { Injectable } from '@angular/core';
import { CacheConstants } from './cache.constants';
import { LocalStorageWrapper } from './local-storage-wrapper.service';
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  cache: any;
  defaultLocation = 'Session';
  constants: any;
  constructor(private localStorageWrapper: LocalStorageWrapper) {
    this.constants = CacheConstants;
    this.cache = {};
  }

  forms = new Map<string, any>();

  clearCache() {
    Object.keys(this.constants).forEach((item) => {
      this.cache[item] = null;
      this.localStorageWrapper.sessionStorage.removeItem(item);
    });
  }

  set(key, value) {
    const val = this.handleSetObject(value);
    this.localStorageWrapper.sessionStorage.setItem(key, val);
  }

  get(key) {
    return this.handleGetObject(this.localStorageWrapper.sessionStorage.getItem(key));
  }

  update(key, nameAttr, newValue) {
    let value = this.handleGetObject(this.localStorageWrapper.sessionStorage.getItem(key));
    value[nameAttr] = newValue;
    value = this.handleSetObject(value);
    this.localStorageWrapper.sessionStorage.setItem(key, value);
  }

  private handleSetObject(value: any) {
    return encodeURIComponent(JSON.stringify({ value }));
  }

  private handleGetObject(dataRaw) {
    let data;
    let value;

    if (dataRaw) {
      data = JSON.parse(decodeURIComponent(dataRaw));

      value = data.value;
    }

    return value;
  }
}
