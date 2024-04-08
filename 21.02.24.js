// prototype inheritance... 
/*
// Define a constructor function for creating Enemy objects
function Enemy(life, name, level){
    this.life = life; // Enemy's life
    this.name = name; // Enemy's name
    this.level = level; // Enemy's level
}

// Add getInfo method to Enemy prototype to display information about the enemy
Enemy.prototype.getInfo = function(){
    console.log(this.life, this.name, this.level);
}

// Add attack method to Enemy prototype to simulate an attack by the enemy
Enemy.prototype.attack = function(){
    console.log(`${this.name} has attacked`);
}

// Add block method to Enemy prototype to simulate the enemy blocking
Enemy.prototype.block = function(){
    console.log(`${this.name} has blocked`);
}

// Define a constructor function for creating Dragon objects, which inherit from Enemy
function Dragon(life, name, level, color, spell){
    // Call the Enemy constructor to initialize properties inherited from Enemy
    Enemy.call(this, life, name, level);

    this.color = color; // Dragon's color
    this.spell = spell; // Dragon's spell
}

// Set up inheritance from Enemy for Dragon
Dragon.prototype = Object.create(Enemy.prototype);

// Add FireBreath method to Dragon prototype to simulate the dragon's fire breath attack
Dragon.prototype.FireBreath = function(){
    console.log("Fire Breath");
}

// Create a new instance of Dragon
const newDragon = new Dragon(100, "beast", 25, 'Green', 'fire');

console.log(newDragon); // Output the newly created Dragon instance

newDragon.FireBreath()
*/



/**********************class in oop's********************** */

// Define the Enemy class
class Enemy {
    constructor(life, name, level) {
        this.life = life;
        this.name = name;
        this.level = level;
    }

    getinfo() {
        console.log(this.life, this.name, this.level);
    }
}

// Define the Bug class which extends Enemy
class Bug extends Enemy {
    constructor(life, name, level, legs, dmg) {
        super(life, name, level);
        this.legs = legs;
        this.dmg = dmg;
    }
}

// Instantiate objects
const turtle = new Enemy(25, "ninja", 10);
const bug = new Bug(35, "Roach", 2, 6, 10); // Instantiating a Bug object

console.log(bug) // Output the newly created bug instance

// Example of using the getinfo method
turtle.getinfo(); // Output: 25 "ninja" 10
bug.getinfo(); // Output: 35 "Roach" 2
