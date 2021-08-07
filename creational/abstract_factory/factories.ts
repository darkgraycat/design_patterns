import { Animal, Cat, Dog } from './animals';

export abstract class AnimalFactory {
  abstract createAnimal(): Animal;
}

export class CatFactory extends AnimalFactory {
  createAnimal() {
    return new Cat();
  }
}

export class DogFactory extends AnimalFactory {
  createAnimal() {
    return new Dog();
  }
}
