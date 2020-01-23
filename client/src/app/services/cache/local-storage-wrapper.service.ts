import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class LocalStorageWrapper {
  private localStorageRef;
  private sessionStorageRef;

  constructor(@Inject(PLATFORM_ID) platformId) {
    if (isPlatformBrowser(platformId)) {
      this.localStorageRef = localStorage;
      this.sessionStorageRef = sessionStorage;
    } else {
      this.localStorageRef = {
        clear: () => { },
        getItem: (key: string) => undefined as string,
        key: (index: number) => undefined as string,
        removeItem: (key: string) => { },
        setItem: (key: string, value: string) => { },
        length: 0,
      };
      this.sessionStorageRef = {
        clear: () => { },
        getItem: (key: string) => undefined as string,
        key: (index: number) => undefined as string,
        removeItem: (key: string) => { },
        setItem: (key: string, value: string) => { },
        length: 0,
      };
    }
  }

  get localStorage() {
    return this.localStorageRef;
  }

  get sessionStorage() {
    return this.sessionStorageRef;
  }
}
