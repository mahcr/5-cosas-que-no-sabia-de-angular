import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.scss']
})
export class Ejemplo2Component implements OnInit {

  public total: number = 0;

  constructor() { }

  ngOnInit(): void { }

}
