import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-hero',
  template: ` <p>hero works!</p> `,
  styles: [],
})
export class HeroComponent implements OnInit {
  constructor(private heroService: HeroService, private logger: LoggerService) {
    console.log(logger['whoIAm']);
  }

  ngOnInit(): void {}

  heyIBecameInjectible() {
    return 'I made component as injectibles';
  }
}
