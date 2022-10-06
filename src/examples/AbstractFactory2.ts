interface AbstractFactory {
    createBookA(): bookA;

    createBookB(): bookB;
}

interface bookA {
    bookCA(): string;
}
interface bookB {

    bookLB(): string;
  
}

class concreteBook1 implements bookA {
    public bookCA(): string {
        return 'This book is written in cyrilic.';
    }
}

class concreteBook2 implements bookB {

    public bookLB(): string {
        return 'This book is written in latin.';
    }
}


function makeBook(factory: AbstractFactory) {
    const productA = factory.createBookA();
    const productB = factory.createBookB();

    console.log(productA);
    console.log(productB);
 
}



export{}