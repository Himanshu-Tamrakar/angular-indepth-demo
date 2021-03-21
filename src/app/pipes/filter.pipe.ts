
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAge',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[]): unknown {
    if (!value) return [];

    return value.filter((item) => item.age >= 18);
  }

}
