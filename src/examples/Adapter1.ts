interface Bag {
    madeOf(): void;
    size():void;
  }
  
  class Backpack implements Bag {
    madeOf() {
      console.log("Poliester");
    }
  
    size() {
      console.log("Medium");
    }
  }
  

  interface Birkin {
    material(): void;
  }
  
  class BagAdapter implements Birkin {
    constructor(private bag: Bag) {}
  
    material() {
      this.bag.madeOf();
    }
  }
  
  const bag1 = new Backpack();
 
  const bagAdapter = new BagAdapter(bag1);

  bagAdapter.material();
  
  export {};