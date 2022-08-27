// let a: number = 5;
// let b: string = '3';
// let c: number = a + Number(b);
// let d: boolean = true;

// let names: string[] = ['sd', 'sfsf'];
// let ages: number[] = [1, 5];
// let tup: [number, string] = [1, '23'];

// let e: any = 3;
// e = '3131';
// e = true;

// let anyArray: any[] = ['str', 'sffs', 123123, true, 312313, false, 123];

// function greet(name: string): string {
//   return name + 'Hi';
// }

// names.map((name: string) => {
//   return name;
// });

// type coordProps = {
//   lat: number;
//   long?: number;
// };

// function coord(coord: coordProps): number {
//   return coord.lat;
// }

// let universalId: string | number = 5;
// universalId = 'sddsf';

// function printID(id: number | string) {
//   if (typeof id === 'string') {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// function helloUser(user: string | string[]) {
//   if (Array.isArray(user)) {
//     console.log(user.join(', ') + 'Hello');
//   } else {
//     console.log(user + 'Hi!');
//   }
// }

type coordProps = {
  lat: number;
  long: number;
};

interface iCoord {
  lat: number;
  long: number;
}

type ID = number | string;

function compute({ lat, long }: iCoord) {
  return lat * long;
}

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   tail?: boolean;
// }

// const dog: Dog = {
//   name: 'sdf',
//   tail: true,
// };

// type Animal = {
//   name: string;
// };

// type Dog = Animal & {
//   tail: boolean;
// };

// const dog: Dog = {
//   name: 'sdf',
//   tail: true,
// };

// interface Dog {
//   name: string;
// }

// interface Dog {
//   tail: boolean;
// }

// const dog: Dog = {
//   name: 'boss',
//   tail: true,
// };

// const a = 'sddfdsf';

// let b: 'hi' = 'hi';

// type direction = 'left' | 'right';

// function moveDog(direction: direction): -1 | 1 | 0 {
//   switch (direction) {
//     case 'left':
//       return -1;
//     case 'right':
//       return 1;
//     default:
//       return 0;
//   }
// }

// moveDog('left');

// interface IConnection {
//   host: string;
//   port: number;
// }

// function connect(params: IConnection | 'default') {}

// connect('default');

// const connection = {
//   host: 'localhost',
//   protocol: 'https' as 'https',
// };

// function connect(host: string, protocol: 'https' | 'http') {}

// connect(connection.host, connection.protocol);

// const a: any = 5;
// let c: number = a as number;

// enum Direction {
//   Left,
//   Right,
// }

// function moveDog(direction: Direction): -1 | 1 | 0 {
//   switch (direction) {
//     case Direction.Left:
//       return -1;
//     case Direction.Right:
//       return 1;
//     default:
//       return 0;
//   }
// }

// function objMod(obj: { Left: number }) {}

// objMod(Direction);

// const enum Direction2 {
//   Up,
//   Down,
// }

// let myDirection = Direction2.Up;

// interface HasLength {
//   length: number;
// }

// function log<T extends HasLength, K>(params: T, arr: K[]): K[] {
//   console.log(arr.length);
//   return arr;
// }

// log<string, number>('sid', [32, 23, 2, 3, 23]);
// log<HasLength, string>({ length: 21 }, ['ada']);

// interface IUser {
//   name: string;
//   age?: number;
//   bid: <T>(sum: T) => void;
// }

// function bid<T>(sum: T) {}

class Coord {
  lat: number;
  long: number;

  protected test() {
    if (this.lat > 0) {
      console.log(this.lat);
    }
  }

  computeDistance(newLat: number, newLong: number): number {
    return 0;
  }

  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
  }
}

const point = new Coord(12, 123);

class MapLocation extends Coord {
  private _name: string;

  get name() {
    return this._name;
  }

  set name(s: string) {
    this._name = s[0].toUpperCase() + s.substring(1);
  }

  override computeDistance(newLat: number, newLong: number): number {
    console.log(this._name);
    this.test();
    return 1;
  }

  constructor(lat: number, long: number, name: string) {
    super(lat, long);
    this._name = name;
  }
}

const loc = new MapLocation(1, 3, 'lac');

interface LoggerService {
  log: (s: string) => void;
}

class Logger implements LoggerService {
  public log(s: string) {
    console.log(s);
  }

  private error() {}

  public a = '';
}

const i = new Logger();

i.log('f');

class MyClass {
  static a = '1';
}

MyClass.a;

class MyClassTwo<T> {
  a: T;
}

const b = new MyClassTwo<string>();
b.a;

abstract class Base {
  print(s: string) {
    console.log(s);
  }

  abstract error(s: string): void;
}

class BaseExtended extends Base {
  error(s: string) {
    console.log('Error' + s);
  }
}

const base = new BaseExtended();

base.print('Base');

class Animal {
  name: string;
}

class Dog {
  name: string;
  tail: boolean;
}

const puppy: Animal = new Dog();
