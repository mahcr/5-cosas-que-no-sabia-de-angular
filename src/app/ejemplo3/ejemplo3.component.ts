import { Component, OnInit } from '@angular/core';
import { convertToUSD } from './to-usd.pipe';

@Component({
  selector: 'demo-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.scss'],
})
export class Ejemplo3Component implements OnInit {

  public valor: number = 0;

  constructor() { }

  ngOnInit(): void { }

  public saveValue(target) {
    this.valor = +target.value;
  }

  public formatToUSD(value) {
    return convertToUSD(value);
  }

}
