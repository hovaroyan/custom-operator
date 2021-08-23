import { Component, OnInit } from '@angular/core';
import { concat, from, interval, Observable, of } from "rxjs";
import { delay, take } from "rxjs/operators";
import { hEvenMultiplierTotal } from 'src/hEvenMultiplierTotal';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
  this.execute.subscribe()
  }

  title = 'custom-operator';
  numbers$ = interval(500).pipe(take(10));// creating an Observable with interval creation operator with emitting values every 500ms starting from 0
  numbers1$ = of(1,2,3,4,5);
  numbers2$= from([1,2,3]);
  number3$= new Observable(obs=>{
    obs.next(1);
    obs.next(2);
    obs.next(3);
  });

  multipliedNumbers$ = this.numbers$.pipe(hEvenMultiplierTotal(10)); // using the custom operator and returning a new observable
  multipliedNumbers1$ = this.numbers1$.pipe(delay(2000),hEvenMultiplierTotal(2)); 
  multipliedNumbers2$ = this.numbers2$.pipe(delay(2000), hEvenMultiplierTotal(3)); 
  multipliedNumbers3$ = this.numbers2$.pipe(delay(3000), hEvenMultiplierTotal(20)); 
  
  execute = concat(this.multipliedNumbers$, this.multipliedNumbers1$ , this.multipliedNumbers2$, this.multipliedNumbers3$) // will not emit values of new observable until observable is finished emitting


}
