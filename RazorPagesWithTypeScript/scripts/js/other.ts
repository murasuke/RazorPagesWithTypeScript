import $ from 'jquery';
import { currentDate } from "testlib";

// タイマーで画面の時刻を更新
$(() => {
    $("#currentDate").text(currentDate());
    setInterval(() => {
        $("#currentDate").text(currentDate());
    }, 1000);
});
