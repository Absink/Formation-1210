import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    if (value) {
      if (value.nbJours > 1){
        return value.nbJours + ' jours';
      }
      return value.nbJours + ' jour';
    }
    return null;
  }

}
