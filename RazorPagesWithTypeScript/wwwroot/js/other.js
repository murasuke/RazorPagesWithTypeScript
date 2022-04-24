var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "jquery", "testlib"], function (require, exports, jquery_1, testlib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    // タイマーで画面の時刻を更新
    (0, jquery_1.default)(() => {
        (0, jquery_1.default)("#currentDate").text((0, testlib_1.currentDate)());
        setInterval(() => {
            (0, jquery_1.default)("#currentDate").text((0, testlib_1.currentDate)());
        }, 1000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zY3JpcHRzL2pzL290aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFHQSxnQkFBZ0I7SUFDaEIsSUFBQSxnQkFBQyxFQUFDLEdBQUcsRUFBRTtRQUNILElBQUEsZ0JBQUMsRUFBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxxQkFBVyxHQUFFLENBQUMsQ0FBQztRQUN0QyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBQSxnQkFBQyxFQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLHFCQUFXLEdBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDIn0=