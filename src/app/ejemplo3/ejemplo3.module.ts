import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { TotalComponent } from './total/total.component';



@NgModule({
  declarations: [CalculatorComponent, TotalComponent],
  imports: [
    CommonModule
  ]
})
export class Ejemplo3Module { }
