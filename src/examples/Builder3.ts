class Apartment {
    constructor(
      public city: string,
      public floor?: number,
      public adress?:string
    ) {}
  
    addCity(city: string) {
      this.city = city;
    }
  
    addFloor(floor: number) {
      this.floor = floor;
    }
  
    addAdress(adress: string) {
      this.adress = adress;
    }
  }

const apartment1 = new Apartment("Belgrade");
  apartment1.addFloor(1)
  apartment1.addAdress("Starine Novaka 4")
  
console.log(apartment1);
export{}