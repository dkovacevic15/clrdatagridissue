import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'separateCamelCase'})
export class PrettyCamelPipe implements PipeTransform {

  transform(value: string, param: string) {
    return value.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  }
}
