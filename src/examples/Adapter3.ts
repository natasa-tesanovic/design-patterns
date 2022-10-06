interface Computer {
    ram(): void;
    
  }
  
  class Laptop implements Computer {
    ram() {
      console.log("32GB");
    }
  
  }
  

  interface Phone {
    ramMemory(): void;
  }
  
  class ComputerAdapter implements Phone {
    constructor(private laptop: Laptop) {}
  
    ramMemory() {
      this.laptop.ram();
    }
  }
  
  const laptop1 = new Laptop();
 
  const computerAdapter1 = new ComputerAdapter(laptop1);

 computerAdapter1.ramMemory();
  
  export {};