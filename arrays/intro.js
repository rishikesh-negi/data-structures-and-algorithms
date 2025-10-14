// Implementing the array data structure from scratch in JavaScript:
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return deletedItem;
  }
}

const newArray = new MyArray();
newArray.push("Hello");
newArray.push("!");
newArray.push("to");
newArray.push("the");
newArray.push("World");
newArray.push("!");

// console.log(newArray.pop());
newArray.delete(1);
newArray.delete(this.length - 1);

console.log(newArray);
