
class Car {
    constructor(
      public brand: string,
      public color?: string,
      public model?:string,
      public numberOfDoors?:number
    ) {}
  
    addBrand(brand: string) {
      this.brand = brand;
    }
  
    addColor(color: string) {
      this.color = color;
    }
  
    addModel(model: string) {
      this.model = model;
    }
    addNumberOfDoors(numberOfDoors:number){
        this.numberOfDoors = numberOfDoors;
    }
  }

const myCar = new Car("Mercedes");
  myCar.addColor("Black")
  myCar.addModel("G-Class")
  myCar.addNumberOfDoors(4);

console.log(myCar);
export{}