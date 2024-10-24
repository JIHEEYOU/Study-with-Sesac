class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    return `${this.make}의 ${this.model}이 운항중입니다.`;
  }
  open() {
    return `${this.model}의 문이 열렸습니다.`;
  }
  close() {
    return `${this.model}의 문이 닫혔습니다.`;
  }
}

//클래스를 사용은?
const myCar = new Car("현대", "K5");
const status2 = myCar.drive();

console.log(status2);
