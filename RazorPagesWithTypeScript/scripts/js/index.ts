import $ from 'jquery';
import { Student, Person } from './testlib';

const greeter = (person: Person) => {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

 const TSButton = () => {    
    const firstname = $('#firstname').val() as string;
    const lastname = $('#lastname').val() as string;
    const user = new Student(firstname, lastname);
    $("#result").html(greeter(user))
}

// ボタンにclickイベントハンドラを設定
$('#btnClickMe').on('click', TSButton);

// グローバルスコープに公開(onclick="TSButton()" で利用できる)
window['TSButton'] = TSButton;


