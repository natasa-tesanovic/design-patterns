interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component1: Manager1;

    private component2: Manager2;

    constructor(c1: Manager1, c2: Manager2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC();
        }

        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.component1.doB();
            this.component2.doC();
        }
    }
}


class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}


class Manager1 extends BaseComponent {
    public doA(): void {
        console.log('Worker 1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Worker 1 does B.');
        this.mediator.notify(this, 'B');
    }
}

class Manager2 extends BaseComponent {
    public doC(): void {
        console.log('Worker 2 does C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('Worker 2 does D.');
        this.mediator.notify(this, 'D');
    }
}


const c1 = new Manager1();
const c2 = new Manager2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Manager triggers operation A.');
c1.doA();

console.log('');
console.log('Manager triggers operation D.');
c2.doD();

export{}