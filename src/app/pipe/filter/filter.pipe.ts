import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {
    if (!searchTearm) {
      return value
    }
    return value.filter((search: any) => {
      return search.exchange_id.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1;
    })
  }

}
