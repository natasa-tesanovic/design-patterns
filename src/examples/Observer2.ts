import { Observable } from "rxjs";

const observable = new Observable((temperature) => {
  temperature.next(25);
  temperature.next(24);
  setTimeout(() => {
    temperature.next(23);
    temperature.complete();
  }, 1000);
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Done");
  },
});

export {};