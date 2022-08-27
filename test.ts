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

interface Dog {
  name: string;
}

interface Dog {
  tail: boolean;
}

const dog: Dog = {
  name: 'boss',
  tail: true,
};
