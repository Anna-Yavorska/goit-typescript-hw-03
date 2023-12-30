class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected tenants: Person[];

  constructor(protected key: Key) {
    this.door = false;
    this.tenants = [];
    this.key = key;
  }

  public comeIn(person: Person): void {
    this.door ? this.tenants.push(person) : console.log("Sorry! The door is closed");
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    this.door = key.getSignature() === this.key.getSignature();
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
