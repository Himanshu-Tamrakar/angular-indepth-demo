import { InjectionToken } from '@angular/core';

function silentLoggerFn() {}

export const SilentLogger = {
  whoIAm: 'I am Silent Logger',
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: silentLoggerFn,
};

export interface AppConfig {
  // apiEndPoint: string;
  title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
  // apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
