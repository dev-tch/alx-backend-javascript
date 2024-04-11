export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // string conversion
  get [Symbol.toStringTag]() {
    return this._location;
  }

  // number conversion
  valueOf() {
    return this._size;
  }
}
