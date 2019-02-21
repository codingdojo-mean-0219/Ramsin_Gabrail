
class Ninja {
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        this.health = 200;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, \ntwo programmers can do in two months.");
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
}
const superSensei = new Sensei("Master Splinter");
	superSensei.speakWisdom();
    superSensei.showStats();
    
// var ninja1 = new Ninja("Hattori Jonzo");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

// var ninja2 = new Ninja("Rams");
// ninja2.sayName().showStats().drinkSake().showStats();