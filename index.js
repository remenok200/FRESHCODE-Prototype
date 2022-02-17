"use strict";

function Car(
  manufacturer,
  model,
  color,
  releaseYear,
  maxSpeed,
  fuelConsumption,
  volume
) {
  if (
    typeof manufacturer !== "string" ||
    typeof model !== "string" ||
    typeof color !== "string" ||
    typeof releaseYear !== "string" ||
    typeof maxSpeed !== "number" ||
    typeof fuelConsumption !== "number" ||
    typeof volume !== "number"
  ) {
    throw new TypeError(
      "Несоответствие типов данных, ожидаются: строка, строка, строка, строка, число, число, число, число!"
    );
  }
  if (
    manufacturer === undefined ||
    manufacturer === "" ||
    model === undefined ||
    model === "" ||
    color === undefined ||
    releaseYear === "" ||
    releaseYear === undefined ||
    color === "" ||
    //isNaN(speed) === true ||
    maxSpeed === undefined ||
    //isNaN(maxSpeed) === true ||
    maxSpeed < 0 ||
    fuelConsumption === undefined ||
    //isNaN(fuelConsumption) === true ||
    fuelConsumption < 0 ||
    volume === undefined ||
    isNaN(volume + fuelConsumption + maxSpeed) === true ||
    volume < 0
  ) {
    throw new Error(
      "Поля не могут быть пустыми или не определенными, кроме того, числа не могут быть отрицательными. Проверяйте, что вводите!"
    );
  }
  // if (speed > maxSpeed) {
  //   throw new RangeError(
  //     "Скорость ну никак не может быть больше максимальной!"
  //   );
  // }

  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.fuelConsumption = fuelConsumption;
  this.volume = volume;
}

function CarPrototype() {
  this.accelerate = function (number) {
    if (number + this.speed > this.maxSpeed) {
      throw new RangeError(
        `Скорость ну никак не может быть больше максимальной! Предлагаем Вам снизить скорость до максимально допустимой, то есть на ${
          this.speed + number - this.maxSpeed
        }`
      );
    }
    return (this.speed += number);
  };

  this.deAccelerate = function (number) {
    if (this.speed - number < 0) {
      throw new RangeError(
        `Машина не может ехать с отрицательной скоростью! Предлагаем Вам уменьшить число торможения таким образом, чтобы скорость вышла в 0, то есть на ${Math.abs(
          this.speed - number
        )}`
      );
    }
    return (this.speed -= number);
  };

  this.stop = function () {
    return (this.speed = 0);
  };
}

Car.prototype = new CarPrototype();

const toyota = new Car("Toyota", "Prius", "white", "2018", 160, 1, 60);
const lexus = new Car("Lexus", "LX-15", "yellow", "2019", 195, 2, 69);
const bmw = new Car("BMW", "X5", "black", "2016", 250, 3, 150);

console.log("Состояние объектов до изменений:");
console.log(toyota);
console.log(lexus);
console.log(bmw);

console.log(
  `Скорость объектов до ее изменения (разгон): ${toyota.speed} ${lexus.speed} ${bmw.speed}`
);
toyota.accelerate(15);
lexus.accelerate(12.6);
bmw.accelerate(17);
console.log(
  `Скорость объектов после ее изменения (разгон): ${toyota.speed} ${lexus.speed} ${bmw.speed}`
);

console.log(
  `Скорость объектов до ее изменения (торможение): ${toyota.speed} ${lexus.speed} ${bmw.speed}`
);
toyota.deAccelerate(4);
lexus.deAccelerate(8);
bmw.deAccelerate(12);
console.log(
  `Скорость объектов после ее изменения (торможение): ${toyota.speed} ${lexus.speed} ${bmw.speed}`
);

console.log(
  `Скорость объектов до ее изменения (остановка): ${toyota.speed} ${lexus.speed} ${bmw.speed}`
);
toyota.stop();
lexus.stop();
bmw.stop();
console.log(
  `Скорость объектов после ее изменения (остановка): ${toyota.speed} ${lexus.speed} ${bmw.speed}`
);

console.log("Состояние после до изменений:");
console.log(toyota);
console.log(lexus);
console.log(bmw);

const testMachine4 = new Car("Toyota", "Prius", "white", "2018", 160, 1, 60); // вернет ошибку
const testMachine3 = new Car("", "LX-15", "yellow", "2019", 195, 2, 69); // вернет ошибку
const testMachine2 = new Car("BMW", "X5", "black", "2016", 250, 3, -5); // вернет ошибку
const testMachine1 = new Car(100, "Prius", "white", "2018", 160, 1, 60); // вернет ошибку
