function handleSession() {
    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set('userAgent', window.navigator.userAgent);

    // Запросим возраст пользователя и сохраним в переменную
    let userAge = prompt('Укажите свой возраст: ');
    session.set('age', userAge);

    // Проверка на возраст и сохранение сессии
    if (session.get('age') >= 18) {
        let curDate = new Date().toLocaleString();

        alert(`Приветствуем на LifeSpot!\nТекущее время: ${curDate}`); 7
        session.set('currentDate', curDate);
    } else {
        alert('Наш сайт только для лиц старше 18 лет! Вы будете перенаправлены');
        window.location.href = "http://www.google.com";
    }

    return session;
}

let sessionLog = function logSession(session) {
    for (let item of session) {
        console.log(item);
    }

}


function filterContent(userInput) {     // Принимаем пользовательский ввод в качестве параметра.
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('.video-title').innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(userInput.toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}
