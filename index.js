const prompt = require("prompt-sync")();

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackType;

        if (this.type === "Warrior") {
            attackType = "Sword"
        } else if (this.type === "Mage") {
            attackType = "Magic"
        } else if (this.type === "Monk") {
            attackType = "Martial Arts"
        } else if (this.type === "Ninja") {
            attackType = "Shuriken"
        }

        console.log(`\nThe ${this.type} called ${this.name} attacked using ${attackType}.`);

    }
}

let heroType;
let heroName;
let heroAge;
let num;

console.log("\nTypes of Hero Classes:\n");
console.log("[ 1 ] - Warrior");
console.log("[ 2 ] - Mage");
console.log("[ 3 ] - Monk");
console.log("[ 4 ] - Ninja\n");

num = prompt("Type your hero class [Number]: ");

if (num == 1) {
    heroType = "Warrior";
} else if (num == 2) {
    heroType = "Mage";
} else if (num == 3) {
    heroType = "Monk";
} else if (num == 4) {
    heroType = "Ninja";
} else {
    console.log("Class type not found");
}

heroName = prompt("Type the name of the hero: ");

heroAge = prompt("Type the age of the hero: ");

let hero = new Hero(heroName, heroAge, heroType);

hero.attack();