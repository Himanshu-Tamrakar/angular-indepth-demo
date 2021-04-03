import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  whoIAm = 'I am Logger Service';
  constructor() {
    console.log('%c Logger service instantiated', 'color: green');
  }
}
