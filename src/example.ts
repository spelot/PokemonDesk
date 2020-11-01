// --- ТИПЫ --- //
type ConcatFn = (a: string, b: string) => string;

const concat: ConcatFn = (a, b) => a + b;

console.log(concat('aasd', '2'));

// --- ИНТЕРФЕЙСЫ --- //
interface Hometask {
  howIDoIt: string;
  simeArray: Array<string | number>; // если в этом массиве предполагается только строки и цифры, если что угодно, то тогда можно было бы просто написать []
  withData?: Hometask[];
}

const MyHometask: Hometask = {
  howIDoIt: "I Do It Well!",
  simeArray: ['str1', 'str2', 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
};

// --- GENERIC --- //
interface MyArray<T> {
  [N: number]: T;

  map<U>(fn: (el: T, i: number) => U): MyArray<U>;
  reduce<U>(reducerFn: (acc: U, currentValue: T, index?: number, arr?: MyArray<T>) => U, initialValue?: U): U;
}

const m: MyArray<number> = [1, 2, 3, 4];

m.map((x, i) => `${x}__${i}`);
console.log(m.reduce((acc, val) => acc + val, 0));