class Pet {
    constructor (name) {
        this.name = name;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor (name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `Meooowww!!!`;
    }
}

class Dog extends Pet {
    bark() {
        return `Woof Wooof!!!`;
    }
    
}