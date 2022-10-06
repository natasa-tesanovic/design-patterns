interface Transport {
    maxSpeed():void;
  }
  
  class Truck implements Transport {
    maxSpeed() {
      console.log("90km/h");
    }

  }
  

  interface toyTruck {
    speed(): void;
  }
  
  class truckAdapter implements toyTruck {
    constructor(private truck: Truck) {}
  
    speed() {
      this.truck.maxSpeed();
    }
  }
  
  const truck1 = new Truck();
 
  const truckAdapter1 = new truckAdapter(truck1);

  truckAdapter1.speed();
  
  export {};