function Ninja(name, health = 100) {
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;
    this.getSpeed = function () {
        return speed
    }
    this.getStrength = function () {
        return strength
    }
}

Ninja.prototype.sayName = function () {
    console.log("Hello, my name is " + this.name)
    return this;
}
Ninja.prototype.showStats = function () {
    console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + this.getSpeed() + ", " + "Strength: " + this.getStrength())
    return this;
}
Ninja.prototype.drinkSake = function () {
    this.health += 10;
    return this;
}

Ninja.prototype.punch = function (fighter) {
    if (fighter instanceof Ninja) {
        fighter.health -= 5;
    }
    return this;
}
Ninja.prototype.kick = function (fighter) {
    if (fighter instanceof Ninja) {
        fighter.health -= 15 * this.getStrength();
    }
    return this;
}
var ninja1 = new Ninja("Hattori Jonzo");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

var ninja2 = new Ninja("Saado");
ninja2.sayName().showStats().drinkSake().punch(ninja1).kick(ninja1).showStats();
ninja1.showStats();