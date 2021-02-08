import { Attribute, Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
    @Attribute('type') public type: string
  ) { }

  ngOnInit(): void {
  }

}
