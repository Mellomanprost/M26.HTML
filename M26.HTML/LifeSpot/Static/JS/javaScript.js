// Запросим возраст пользователя и сохраним в переменную
userAge = prompt('Укажите свой возраст ');

if (userAge >= 18) {
    curDate = new Date().toLocaleString();
    alert('Приветствуем на LifeSpot! ' + curDate);
} else {
    alert('Наш сайт только для лиц старше 18 лет! Вы будете перенаправлены');
    window.location.href = "http://www.google.com";
}
