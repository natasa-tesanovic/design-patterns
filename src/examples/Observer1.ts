import { Observable } from "rxjs";

const observable = new Observable((Seniority) => {
  Seniority.next("Intern");
  Seniority.next("Junior");
  setTimeout(() => {
  Seniority.next("Senior");
  Seniority.complete();
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



export{}