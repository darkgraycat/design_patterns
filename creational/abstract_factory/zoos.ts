import { Animal } from './animals';
import { AnimalFactory, CatFactory, DogFactory } from './factories';

export abstract class Zoo {
  abstract animals: Animal[];
  abstract factory: AnimalFactory;
  addAnimal(): void {
    this.animals.push(this.factory.createAnimal());
  }
}

export class CatZoo extends Zoo {
  animals: Animal[] = [];
  factory: AnimalFactory = new CatFactory();
}

export class DogZoo extends Zoo {
  animals: Animal[] = [];
  factory: AnimalFactory = new DogFactory();
}
