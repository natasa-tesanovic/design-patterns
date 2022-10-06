interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component1: Runway1;

    private component2: Runway2;

    constructor(c1: Runway1, c2: Runway2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Plane is landing');
            this.component2.doC();
        }

        if (event === 'B') {
            console.log('Plane is taking off');
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


class Runway1 extends BaseComponent {
    public doA(): void {
        console.log('Plane 1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Plane 1 does B.');
        this.mediator.notify(this, 'B');
    }
}

class Runway2 extends BaseComponent {
    public doC(): void {
        console.log('Plane 2 does C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('Plane 2 does D.');
        this.mediator.notify(this, 'D');
    }
}


const c1 = new Runway1();
const c2 = new Runway2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Pilot triggers operation A.');
c1.doA();

console.log('');
console.log('Pilot triggers operation D.');
c2.doD();

export{}