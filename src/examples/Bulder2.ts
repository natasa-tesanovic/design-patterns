
class Phone {
    constructor(
      public brand: string,
      public color?: string,
      public model?:string
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
  }

const phone1 = new Phone("Samsung");
  phone1.addColor("Black")
  phone1.addModel("S2787878")
  
console.log(phone1);
export{}