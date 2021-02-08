import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'demo-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.scss']
})
export class ImpuestosComponent implements OnInit, OnChanges {

  @Input() public subTotal: number;

  public iva: number = 0
  public servicio: number = 0

  constructor() { }

  public ngOnInit(): void { }

  public ngOnChanges() {
    this.iva = this.subTotal * .13;
    this.servicio = this.subTotal * .10;
  }

}
