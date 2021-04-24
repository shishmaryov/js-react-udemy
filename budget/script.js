'use strict';


let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

        console.log("done");

        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
}



var detectDayBudget = function () {
    appData.moneyPerDay = appData.budget / 30;
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
};

detectDayBudget();



var detectLevel = function () {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
};

detectLevel();

var chooseOptExpenses = function() {
    var answer1 = prompt('Статья необязательных расходов?');
    var answer2 = prompt('Статья необязательных расходов?');
    var answer3 = prompt('Статья необязательных расходов?');

    appData.optionalExpenses = {
    1: answer1,
    2: answer2,
    3: answer3,
    };
    
};