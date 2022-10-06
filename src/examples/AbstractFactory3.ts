interface AbstractFactory {
    createNotebookA(): notebookA;

    createNotebookB(): notebookB;
}

interface notebookA {
    notebookLA(): string;
}
interface notebookB {

    notebookSB(): string;
  
}

class concreteNotebookA implements notebookA {
    public notebookLA(): string {
        return 'This notebook is printed with lines.';
    }
}

class concreteNotebookB implements notebookB {

    public notebookSB(): string {
        return 'This notebook is printed with squares.';
    }
}


function makeBook(factory: AbstractFactory) {
    const productA = factory.createNotebookA();
    const productB = factory.createNotebookB();

    console.log(productA);
    console.log(productB);
 
}



export{}

