import $ from 'jquery';
import { Student, Person } from 'Student';

const greeter = (person: Person) => {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

 const TSButton = () => {    
    const firstname = $('#firstname').val() as string;
    const lastname = $('#lastname').val() as string;
    const user = new Student(firstname, lastname);
    $("#result").html(greeter(user))
}


const user = new Student('Fread', 'Smith');
$('#btnClickMe').on('click', TSButton);
window['TSButton'] = TSButton;

