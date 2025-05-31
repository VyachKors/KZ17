import {Person} from "./person.js";

export class Worker extends Person {
    #birthDate; // Приватное свойство для хранения дня рождения
    #rate = 1000; // Приватное свойство, ставка за день работы, по умолчанию 1000
    #days = 0; // Приватное свойство, отработанные дни за месяц, по умолчанию 0
    constructor(firstName, lastName, birthDate, position) {
        super(firstName, lastName, birthDate);
        // Разбираем строку в формате "мм-дд-гггг"
        const [month, day, year] = birthDate.split('-').map(Number);
        this.#birthDate = new Date(year, month - 1, day); // Учитываем, что месяц в объекте Date считается от 0
        this.position = position;    // Устанавливаем должность
    }

    // Геттер для #rate
    get rate() {
        return this.#rate;
    }

    // Сеттер для #rate с проверкой
    set rate(value) {
        if (value >= 1000) {
            this.#rate = value;
        } else {
            console.error('Ошибка: ставка не может быть меньше 1000 рублей.');
        }
    }

    addDays(days) {
        if (days > 0) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();
            const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            if (this.#days + days <= daysInCurrentMonth) {
                this.#days += days;
                console.log(`Отработанные дни обновлены. Текущее количество: ${this.#days}`);
            } else {
                console.error('Ошибка: общее количество дней превышает число дней в текущем месяце.');
            }
        } else {
            console.error('Ошибка: количество дней должно быть больше 0.');
        }
    }

    get workedDays() {
        return this.#days;
    }

    // Метод для расчета зарплаты за текущий месяц с учетом бонуса на день рождения
    getSalary() {
        const currentDate = new Date();
        const salary = this.#rate * this.#days;

        // Проверяем, месяц текущий или нет
        if (this.#birthDate.getMonth() === currentDate.getMonth()) {
            return salary * 1.10; // Добавляем 10% бонус к зарплате
        }

        return salary;
    }

    // Статический метод для нахождения работников, отработавших больше всех дней
    static whoWorkedMore(...workers) {
        if (workers.length === 0) {
            console.log('Нет данных о работниках.');
            return;
        }

        let maxDays = 0;
        let hardestWorkers = [];

        for (const worker of workers) {
            if (worker.workedDays > maxDays) {
                maxDays = worker.workedDays;
                hardestWorkers = [worker];
            } else if (worker.workedDays === maxDays) {
                hardestWorkers.push(worker);
            }
        }

        const fullNames = hardestWorkers.map(worker => worker.getFullName());
        console.log(`Больше всех отработали: ${fullNames.join(', ')}. Количество рабочих дней - ${maxDays}`);
    }

    // Статический метод для нахождения самого младшего работника


    // static whoIsYounger(...workers) {
    //     console.log(workers);
    //     if (workers.length === 0) {
    //         console.log('Нет данных о работниках.');
    //         return;
    //     }
    //
    //     let minAge = Infinity;
    //     let youngestWorkers = [];
    //
    //     for (const worker of workers) {
    //         const ageStr = worker.getAge();
    //         const ageMatch = ageStr.match(/\d+/);
    //
    //         if (ageMatch === null) {
    //             console.error(`Не удалось извлечь возраст из строки: ${ageStr}`);
    //             continue;
    //         }
    //
    //         const age = parseInt(ageMatch[0]); // Извлекаем число из строки с возрастом
    //
    //         if (age < minAge) {
    //             minAge = age;
    //             youngestWorkers = [worker];
    //         } else if (age === minAge) {
    //             youngestWorkers.push(worker);
    //         }
    //     }
    //
    //     const info = youngestWorkers.map(worker => `${worker.getFullName()} ${worker.getAge()}`);
    //     console.log(info.join('; '));
    // }

    static whoIsYounger(...workers) {
        if (workers.length === 0) {
            console.log('Нет данных о работниках.');
            return;
        }

        let minAge = Infinity;
        let youngestWorkers = [];

        for (const worker of workers) {
            const age = worker.getAgeNumber();
            if (typeof age !== 'number' || isNaN(age)) {
                console.error('Не удалось получить числовой возраст для: ${worker.getFullName()}');
                continue;
            }

            if (age < minAge) {
                minAge = age;
                youngestWorkers = [worker];
            } else if (age === minAge) {
                youngestWorkers.push(worker);
            }
        }

        const info = youngestWorkers.map(worker =>
            `${worker.getFullName()} ${worker.getAgeString()}`
        );
        console.log(info.join('; '));
    }
}