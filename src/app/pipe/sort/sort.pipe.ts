import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:any): unknown {
    return value.sort((a:any,b:any) => (a > b) ? 1 : ((b.exchange_id > a.exchange_id) ? -1 : 0));
  }

}
