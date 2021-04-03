export class EvenBetterLogger {
  public whoIAm = 'I am even better logger';
  constructor() {
    console.log(
      '%c EvenBetterLogger instanciated',
      'color: red; font-size: 20px'
    );
  }
}
