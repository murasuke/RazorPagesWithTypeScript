/**
 * 各ページから利用される共通関数、クラス 
 */

export interface Person {
    firstName: string;
    lastName: string;
}

export class Student implements Person {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

export const currentDate = () => {
    const date = new Date();
    return Intl.DateTimeFormat(
        "ja-JP", {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
    }).format(date);
};
