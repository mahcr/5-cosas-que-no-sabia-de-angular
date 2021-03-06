import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'demo-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.scss']
})
export class Ejemplo2Component implements OnInit {

  public rubros$ = new BehaviorSubject([]);
  public subTotal$ = this.rubros$.pipe(
    filter((value) => !!value.length),
    map((values) => values.reduce((acc, next) => acc + next))
  )

  constructor() { }

  public ngOnInit(): void { }

  public addMount(e: Event) {
    e.preventDefault()
    const target = (e.target as HTMLInputElement);
    this.rubros$.next([ ...this.rubros$.getValue(), +target.value]);
    target.value = '';
  }

}
