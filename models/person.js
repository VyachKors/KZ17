export class Person {
    #birthday;

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birthday;
    }

    get birthday() {
        return this.#birthday;
    }

    getFullName() {
        return `${this.firstName}  ${this.lastName}`;
    }


    getAge() {
        console.log(`this.#birthday: ${this.#birthday}`);
        const birthDate = new Date(this.#birthday);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Проверка на то, нужно ли вычитать год
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        // Правильное форматирование возраста для русского языка
        if (age % 10 === 1 && age % 100 !== 11) {
            return `${age} год`;
        } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
            return `${age} года`;
        } else {
            return `${age} лет`;
        }
    }

}
