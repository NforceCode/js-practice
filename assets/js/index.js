// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)

function sumUntil (number) {
  if (number < 0) {
    throw new RangeError('Number must not be negative');
  }
  let counter = number;
  while (number > 0) {
    return counter += sumUntil(number - 1);
  }
  return counter;
}

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

class Student {
  constructor(name, surname, isMale, contacts, univercity) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
    this.univercity = univercity;
  }

  getAllInfo() {
    return `Name: ${this.name}\nSurname: ${this.surname}\nGender: ${
      this.isMale ? 'Male' : 'Female'
    }\nContact info: ${this.contacts.getContactData()}\nStudent data: ${this.univercity.getUniData()}`;
  }
}

class UniData {
  constructor(faculty, kafedra) {
    this.faculty = faculty;
    this.kafedra = kafedra;
  }

  getUniData() {
    return `\n\tFaculty: ${this.faculty}\n\tKafedra: ${this.kafedra}`;
  }
}

class Contacts {
  constructor(phone, email, address) {
    this.phone = phone;
    this.email = email;
    this.address = address;
  }

  getContactData() {
    return `\n\tPhone number: ${this.phone}\n\tEmail: ${this.email}\n\tAddress: ${this.address}`;
  }
}

const zntu = new UniData('FRET', 'ZI');
const stud1 = new Student(
  'Kir',
  'Rozum',
  true,
  new Contacts(3800123454, 'test@tesmail.test', 'Tester street 01'),
  zntu
);

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов

const getRandomNumber = () => Math.round(Math.random() * 100);

const testArray = new Array(25).fill().map(() => getRandomNumber());

testArray.fill(0, 24);

console.log('Even index');
for(const [key, value] of testArray.entries()) {
  if(key% 2 === 0) {
    console.log(value);
  }
}
console.log('Even index');

console.log('even numbers');
testArray.forEach((item) => {
  if (item % 2 === 0) {
    console.log(item);
  }
});
console.log('even numbers');

console.log('Index 0');

let counter = 0;
for (const [key, value] of testArray.entries()) {
  if(value === 0) {
    console.log(key);
    counter++;
  }
}
console.log('Index 0');
console.log(`zero counter = ${counter}`);

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
  constructor(author, name, yearOfPublish, Publisher) {
    this.author = author;
    this.name = name;
    this.yearOfPublish = yearOfPublish;
    this.Publisher = Publisher;
  }
}

class EBook extends Book {
  constructor(author, name, yearOfPublish, Publisher, format, Enumber) {
    super(author, name, yearOfPublish, Publisher);
    this.format = format;
    this.Enumber = Enumber;
  }
}

// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function fizzBuzzPrinter(number) {
  if(isNaN(number)) {
    throw new TypeError('Input must be integer number');
  }
  if(!Number.isInteger(number)) {
    throw new TypeError('Number must be integer');
  }
  if (number < 1) {
    throw new RangeError('Number must be positive');
  }
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      continue;
    } else if (i % 3 === 0) {
      console.log('fizz');
      continue;
    } else if (i % 5 === 0) {
      console.log('buzz');
      continue;
    } else {
      console.log(i);
    }
  }
}
