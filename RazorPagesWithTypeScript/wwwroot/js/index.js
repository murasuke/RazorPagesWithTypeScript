var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "jquery", "./testlib"], function (require, exports, jquery_1, testlib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    const greeter = (person) => {
        return `Hello, ${person.firstName} ${person.lastName}`;
    };
    const TSButton = () => {
        const firstname = (0, jquery_1.default)('#firstname').val();
        const lastname = (0, jquery_1.default)('#lastname').val();
        const user = new testlib_1.Student(firstname, lastname);
        (0, jquery_1.default)("#result").html(greeter(user));
    };
    // ボタンにclickイベントハンドラを設定
    (0, jquery_1.default)('#btnClickMe').on('click', TSButton);
    // グローバルスコープに公開(onclick="TSButton()" で利用できる)
    window['TSButton'] = TSButton;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zY3JpcHRzL2pzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFHQSxNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO1FBQy9CLE9BQU8sVUFBVSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzRCxDQUFDLENBQUE7SUFFQSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDbkIsTUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBQyxFQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBWSxDQUFDO1FBQ2xELE1BQU0sUUFBUSxHQUFHLElBQUEsZ0JBQUMsRUFBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQVksQ0FBQztRQUNoRCxNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUEsZ0JBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDcEMsQ0FBQyxDQUFBO0lBRUQsdUJBQXVCO0lBQ3ZCLElBQUEsZ0JBQUMsRUFBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXZDLDRDQUE0QztJQUM1QyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDIn0=