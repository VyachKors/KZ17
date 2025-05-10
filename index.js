import {Worker} from "./models/worker.js";
import {Person} from "./models/person.js";

// Создаём пятерых работников
const worker1 = new Worker('John', 'Doe', '10-25-1985', 'Engineer');
const worker2 = new Worker('Jane', 'Smith', '11-20-1990', 'Designer');
const worker3 = new Worker('Jim', 'Brown', '12-15-1975', 'Manager');
const worker4 = new Worker('Alice', 'Johnson', '03-12-1992', 'Analyst');
const worker5 = new Worker('Bob', 'Davis', '08-05-1988', 'Developer');

console.log(worker1.getAge());

// Меняем ставку в день для троих работников
worker1.rate = 1200;
worker3.rate = 500;
worker5.rate = 1300;

// Добавляем рабочие дни для каждого из работников
worker1.addDays(20);
worker1.addDays(-2); // Попытка добавить отрицательное количество дней
worker2.addDays(15);
worker2.addDays(3);
worker3.addDays(5);
worker3.addDays(25);
worker4.addDays(10);
worker4.addDays(4);
worker5.addDays(22);
worker5.addDays(8);

// Выводим зарплату за текущий месяц для каждого из работников
console.log(`${worker1.getFullName()} - ${worker1.getSalary()} рублей`);
console.log(`${worker2.getFullName()} - ${worker2.getSalary()} рублей`);
console.log(`${worker3.getFullName()} - ${worker3.getSalary()} рублей`);
console.log(`${worker4.getFullName()} - ${worker4.getSalary()} рублей`);
console.log(`${worker5.getFullName()} - ${worker5.getSalary()} рублей`);

// Выясняем, кто из работников отработал больше всех дней за месяц
Worker.whoWorkedMore(worker1, worker2, worker3, worker4, worker5);

// Выясняем, кто из работников самый младший
Worker.whoIsYounger(worker1, worker2, worker3, worker4, worker5);

// Проверка работоспособности getAge
const person1 = new Person('Jo', 'Bee', '11-05-1974', 'Engineer');
person1.getAge();