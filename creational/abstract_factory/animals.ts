export interface Animal {
  hello: () => void;
}

export class Cat implements Animal {
  hello() {
    console.log('Meow');
  }
}

export class Dog implements Animal {
  hello() {
    console.log('Bark');
  }
}
