import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class UserService {
  constructor(log: LogService) {
    console.log('%c User Service Created', 'color: blue');
  }
}
