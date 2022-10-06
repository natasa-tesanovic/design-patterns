interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component1: Car1;

    private component2: Car2;

    constructor(c1: Car1, c2: Car2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('This car is going left');
            this.component2.doC();
        }

        if (event === 'D') {
            console.log('This car is going right');
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


class Car1 extends BaseComponent {
    public doA(): void {
        console.log('Car 1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Car 1 does B.');
        this.mediator.notify(this, 'B');
    }
}

class Car2 extends BaseComponent {
    public doC(): void {
        console.log('Car 2 does C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('Car 2 does D.');
        this.mediator.notify(this, 'D');
    }
}


const c1 = new Car1();
const c2 = new Car2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Car triggers operation A.');
c1.doA();

console.log('');
console.log('Car triggers operation D.');
c2.doD();

export{}