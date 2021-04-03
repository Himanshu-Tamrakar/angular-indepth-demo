import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'platform' })
export class HeroService {
  constructor() {
    console.log('%c Hero service instantiated', 'color: green');
  }
}
