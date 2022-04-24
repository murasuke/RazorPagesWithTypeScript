/**
 * 各ページから利用される共通関数、クラス
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.currentDate = exports.Student = void 0;
    class Student {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + " " + lastName;
        }
    }
    exports.Student = Student;
    const currentDate = () => {
        const date = new Date();
        return Intl.DateTimeFormat("ja-JP", {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            day: 'numeric',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
    };
    exports.currentDate = currentDate;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGxpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvanMvdGVzdGxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7SUFPSCxNQUFhLE9BQU87UUFFaEIsWUFBbUIsU0FBaUIsRUFBUyxRQUFnQjtZQUExQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1lBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtZQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQy9DLENBQUM7S0FDSjtJQUxELDBCQUtDO0lBRU0sTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO1FBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUN0QixPQUFPLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUM7SUFYVyxRQUFBLFdBQVcsZUFXdEIifQ==