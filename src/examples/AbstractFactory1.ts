interface AbstractFactory {
    createAppA(): appA;

    createAppB(): appB;
}

interface appA {
    darkTheme(): string;
}
interface appB {

    lightTheme(): string;
  
}

class concreteAppA1 implements appA {
    public darkTheme(): string {
        return 'This app has dark theme';
    }
}



class concreteAppB2 implements appB {

    public lightTheme(): string {
        return 'This app has light theme';
    }
}


function makeApp(factory: AbstractFactory) {
    const productA = factory.createAppA();
    const productB = factory.createAppB();

    console.log(productA);
    console.log(productB);
 
}




export{}