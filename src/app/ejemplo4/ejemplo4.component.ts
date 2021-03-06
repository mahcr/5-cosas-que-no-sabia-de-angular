import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from './environment.service';

@Component({
  selector: 'demo-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.scss']
})
export class Ejemplo4Component implements OnInit {

  constructor(public environmentService: EnvironmentService) { }

  public ngOnInit(): void { }

  public send(): void{
    throw ':( Game Over';
  }

}
