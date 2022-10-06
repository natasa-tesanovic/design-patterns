import { Observable } from "rxjs";

const observable = new Observable((Post) => {
  Post.next("4");
  Post.next("5");
  setTimeout(() => {
  Post.next("6");
  Post.complete();
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