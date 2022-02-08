'use strict';

function Car(manufacturer, model, color, releaseYear, speed, maxSpeed, fuelConsumption, volume) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.releaseYear = releaseYear;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.fuelConsumption = fuelConsumption;
    this.volume = volume;
}

function CarPrototype() {
    this.accelerate = function(number) {
        return this.speed += number; // без return тоже работает; нужен ли он?
    }

    this.deAccelerate = function(number) {
        return this.speed -= number;
    }

    this.stop = function() {
        return this.speed = 0;
    }
}

Car.prototype = new CarPrototype();

const toyota = new Car('Toyota', 'Prius', 'white', '2018', 20, 160, 1, 60);
const lexus = new Car('Lexus', 'LX-15', 'yellow', '2019', 38.5, 195, 2, 69);
const bmw = new Car('BMW', 'X5', 'black', '2016', 70, 250, 3, 150);

console.log('Состояние объектов до изменений:');
console.log(toyota);
console.log(lexus);
console.log(bmw);

console.log(`Скорость объектов до ее изменения (разгон): ${toyota.speed} ${lexus.speed} ${bmw.speed}`);
toyota.accelerate(15);
lexus.accelerate(12.6);
bmw.accelerate(17);
console.log(`Скорость объектов после ее изменения (разгон): ${toyota.speed} ${lexus.speed} ${bmw.speed}`);

console.log(`Скорость объектов до ее изменения (торможение): ${toyota.speed} ${lexus.speed} ${bmw.speed}`);
toyota.deAccelerate(16);
lexus.deAccelerate(30);
bmw.deAccelerate(40);
console.log(`Скорость объектов после ее изменения (торможение): ${toyota.speed} ${lexus.speed} ${bmw.speed}`);

console.log(`Скорость объектов до ее изменения (остановка): ${toyota.speed} ${lexus.speed} ${bmw.speed}`);
toyota.stop();
lexus.stop();
bmw.stop();
console.log(`Скорость объектов после ее изменения (остановка): ${toyota.speed} ${lexus.speed} ${bmw.speed}`);

console.log('Состояние после до изменений:');
console.log(toyota);
console.log(lexus);
console.log(bmw);