export class Student implements Person {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

export interface Person {
    firstName: string;
    lastName: string;
}
