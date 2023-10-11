//! TEST 1 //

function getSum(n: number): number {
  let sum1 = 1;
  let sum2 = 1;

  for (let i = 1; i <= n; i++) {
    sum1 *= 2 * i - 1;
    sum2 *= 2 * i;
  }

  return sum1 + sum2;
}

let n = 3;
let result = getSum(n);
console.log(result);


//! TEST 2 //

let array: number[] = [1589, 31851, 512, 180975, 78]

function getDigitsNumber(arr: number[]): number {
  let top = arr[0]

  for (const iterator of arr) {
    if (iterator > top) {
      top = iterator
    }
  }

  return top
}
console.log(getDigitsNumber(array));


//! TEST 3 //

let arr: any[] = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}]

function getStringArr(arr: any[]): string[] {
  let stringArr: string[] = [];

  for (const iterator of arr) {
    if (iterator === iterator.toString()) {
      console.log(iterator);
      stringArr.push(iterator)
    }
  }

  return stringArr;
}
console.log(getStringArr(arr));


//! TEST 4 // 

const punctuationSigns: string[] = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
let str: string = "Hello! How are you? I'm doing great. What's new?"

let count = 0;

for (const el of str) {
  if (punctuationSigns.includes(el)) {
    count++;
  }
}
console.log(count);


//! TEST 5 //

const input: any = "Abdulaziz Programmer"

function switchLetters(str: string[]): string {
  console.log(str);
  let words = '';
  for (const i of str) {
    if (i.toLowerCase() === i) {
      words += i.toUpperCase()
    }
    if (i.toUpperCase() === i) {
      words += i.toLowerCase()
    }
  }
  return words
}

console.log(switchLetters(input));


//! TEST 6 //

let obj: any = { a: 1, b: 2, c: 3 }

function changeObjToArr(obj: any): object {
  let res: any = []
  for (const i in obj) {
    res.push(i + obj[i])
  }
  return res
}

console.log(changeObjToArr(obj));


//! TEST 7 //

type Student = {
  name: string;
  isGrant: boolean;
};

let students: Student[] = [
  { name: "Jurabek", isGrant: false },
  { name: "Elbek", isGrant: true },
  { name: "Shamshod", isGrant: false },
  { name: "Kamola", isGrant: false },
  { name: "Gulnoza", isGrant: true },
  { name: "Savlatbek", isGrant: false },
]


function seperateStudents(students: Student[]): object {
  let grant: any = []
  let contract: any = []
  let all: any = {}
  students.map((el) => {
    if (el.isGrant == true) {
      grant.push(el.name)
    } else {
      contract.push(el.name)
    }
  })
  all.grant = grant, all.contract = contract
  return all
}
console.log(seperateStudents(students));


//! TEST 8 //

type books = {
  name: string;
  pages: number;
  isReadFinished: boolean;
};

let book: books[] = [
  { name: "The Great Gatsby", pages: 180, isReadFinished: true },
  { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
  { name: "Atom habits", pages: 328, isReadFinished: true },
  { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
  { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
  { name: "The Hobbit", pages: 310, isReadFinished: false },
  { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
  { name: "Harry Potter", pages: 320, isReadFinished: true },
  { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
  { name: "To the Lighthouse", pages: 209, isReadFinished: true }

]


function getTotalPages(book: books[]): number {
  let all: number = 0
  book.map((el) => {
    all += el.pages
  })
  return all
}
console.log(getTotalPages(book));


//! TEST 9 //

let objs: object = { a: 1, b: 2, c: 3 }

let res = Object.keys(objs)

console.log(res);


//! TEST 10 //

function createStudent(this: any, firstName: string, lastName: string, university: string, course: number, totalYears: number, isGrant: boolean) {
  return {
    firstName,
    lastName,
    university,
    course,
    totalYears,
    isGrant,
  }
}

let student = createStudent("Abdulaziz", "Programmer", "TATU", 3, 4, true);
console.log(`${student.firstName} ${student.lastName} ${student.university} universitetida ${student.course}-kursda ${student.isGrant ? 'grant' : 'contract'} asosida o'qiydi. ${student.totalYears - student.course} yildan keyin universitetidan qutuladi`);
