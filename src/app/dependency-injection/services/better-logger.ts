import { Injectable } from '@angular/core';

// @Injectable()
export class BetterLogger {
  public whoIAm = 'I am better logger';
  constructor() {
    console.log('%c BetterLogger instanciated', 'color: red; font-size: 20px');
  }
}
