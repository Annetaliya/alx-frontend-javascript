const cloneCarSymbol = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this[cloneCarSymbol] = this.constructor[cloneCarSymbol];
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

Car[cloneCarSymbol] = Symbol('cloneCar');

export default Car;
