class Vehicle {
    constructor(public color: string) { }

    protected honk(): void {
        console.log('Beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Truck extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }
    private drive(): void {
        console.log('Chugga chugga');
    }

    startDrivingProcess(): void {
        this.drive();
    }
}

const truck = new Truck(4, 'black');
truck.startDrivingProcess();
