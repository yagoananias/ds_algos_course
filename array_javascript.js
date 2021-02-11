class MyArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.lenght] = item
    this.lenght++;
    return this.lenght;
  }
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.get(0))