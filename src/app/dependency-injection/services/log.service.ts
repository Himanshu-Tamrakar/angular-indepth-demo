import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  constructor() {
    console.log('%c Log Service Created', 'color: blue');
  }
}
