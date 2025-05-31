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


    // getAge() {
    //     const birthDate = new Date(this.#birthday);
    //     const today = new Date();
    //
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     const monthDiff = today.getMonth() - birthDate.getMonth();
    //
    //     // Проверка на то, нужно ли вычитать год
    //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     // Правильное форматирование возраста для русского языка
    //     if (age % 10 === 1 && age % 100 !== 11) {
    //         return `${age} год`;
    //     } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
    //         return `${age} года`;
    //     } else {
    //         return `${age} лет`;
    //     }
    // }
// Метод для получении только возраста в числовом виде
    getAgeNumber() {
        const birthDate = new Date(this.#birthday);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Проверяем, был ли уже день рождения в этом году
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    }

// Метод для форматирования возраста с текстом
    getAgeString() {
        const age = this.getAgeNumber();

        if (age % 10 === 1 && age % 100 !== 11) {
            return `${age} год`;
        } else if (
            age % 10 >= 2 &&
            age % 10 <= 4 &&
            (age % 100 < 10 || age % 100 >= 20)
        ) {
            return `${age} года`;
        } else {
            return `${age} лет`;
        }
    }
}
