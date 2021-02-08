import { Pipe, PipeTransform } from '@angular/core';

export function convertToUSD(number) {
  console.log('Cambiando valor a dolares')
  return `$${number}`
}

@Pipe({
  name: 'toUsd'
})
export class ToUsdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return convertToUSD(value);
  }

}
