import { MonoTypeOperatorFunction, pipe } from "rxjs";
import { filter, map, reduce, tap } from "rxjs/operators";


export function hEvenMultiplierTotal(number: number): MonoTypeOperatorFunction<number> {
  return pipe(
    filter(v => v % 2 === 0), // filtering even numbers out of the source observable including
    map(v => v * number), // multiplies the  filtered values by a given number
    tap(value=> console.log(`Even values multiplied by ${number}: `,value)), // logs values to the console 
    reduce((acc,value)=> acc+value),
    tap(value=> console.log(`Total of Even values multiplied by ${number} : `,value)),

  );
}


  