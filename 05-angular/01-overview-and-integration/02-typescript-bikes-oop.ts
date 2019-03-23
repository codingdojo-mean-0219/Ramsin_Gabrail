class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`Price: ${this.price} \n Max Speed: ${this.max_speed} \n Miles: ${this.miles}`)
        return this;
    }
    ride() {
        this.miles += 10;
        console.log(`Riding`);
        return this;
    }
    reverse() {
        if (this.miles >= 5) {
            this.miles -= 5;
        }
        console.log(`Reversing`);
        return this;
    }
}
const dyno = new Bike(200, `25mph`);
dyno.ride().ride().ride().reverse().displayInfo();

const trek = new Bike(320, `35mph`);
trek.ride().ride().reverse().reverse().displayInfo();

const cannondale = new Bike(500, `40mph`);
cannondale.reverse().reverse().reverse().displayInfo();