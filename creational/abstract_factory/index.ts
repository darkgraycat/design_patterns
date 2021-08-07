import { Zoo, CatZoo, DogZoo } from './zoos';

const zoo1: Zoo = new CatZoo();
const zoo2: Zoo = new DogZoo();

zoo1.addAnimal();
zoo2.addAnimal();

zoo1.animals.map(animal => animal.hello());
zoo2.animals.map(animal => animal.hello());

// expected:
// Meow
// Bark
