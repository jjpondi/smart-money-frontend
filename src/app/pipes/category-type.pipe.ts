import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryType'
})
export class CategoryTypePipe implements PipeTransform {

  transform(value: string): string {
    if(value==='INCOME')
    {
      return '<p-tag value="Revenu" severity="succes"></p-tag>'
    }
    else{
      return '<p-tag value="Dépense" severity="danger"></p-tag>'
    }
   
  }

}
