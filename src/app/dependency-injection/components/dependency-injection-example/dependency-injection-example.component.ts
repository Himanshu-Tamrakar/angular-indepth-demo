import { Component, Inject, OnInit } from '@angular/core';
import { BetterLogger } from '../../services/better-logger';
import { EvenBetterLogger } from '../../services/even-better-logger';
import { HeroService } from '../../services/hero.service';
import { LogService } from '../../services/log.service';
import { LoggerService } from '../../services/logger.service';
import { AppConfig, APP_CONFIG } from '../../services/silent-logger';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dependency-injection-example',
  template: `
    <p>dependency-injection-example works!</p>
    <app-hero></app-hero>
  `,
  styles: [],
})
export class DependencyInjectionExampleComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private logger: LoggerService,
    private oldLog: EvenBetterLogger,
    @Inject(APP_CONFIG) config: AppConfig,
    private userService: UserService
  ) {
    console.log('logger: ', logger['whoIAm']);
    logger.whoIAm = 'Himashu';
    console.log('changed logger: ', logger['whoIAm']);
    // console.log('oldLog: ', oldLog['heyIBecameInjectible']());
    console.log(config);
    // console.log(userService);
  }

  ngOnInit(): void {}
}
