// объект Map для хранения сессии
let session = new Map();

// функция для получения пользовательского ввода
const inputParseFunction = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
};

// функция проверки возраста
function checkAge() {
    // Запросим возраст пользователя и сохраним в переменную
    session.set('age', prompt('Укажите пожалуйста свой возраст: '));

    // Проверка на возраст и сохранение сессии
    if (session.get('age') >= 18) {
        alert(`Приветствуем на LifeSpot!\nТекущее время: ${new Date().toLocaleString()}`);
    } else {
        alert('Наш сайт только для лиц старше 18 лет! Вы будете перенаправлены');
        window.location.href = "http://www.google.com";
    }
}

// функция записывающая информацию о сессии
function handleSession() {
    // Сохраним UserAgent
    session.set('userAgent', window.navigator.userAgent);

    // Сохраним время начала сессии
    session.set('currentDate', new Date().toLocaleString());
}

// Вывод данных сессии в консоль
let sessionLog = function logSession() {
    for (let item of session) {
        console.log(item);
    }
}

// функция фильтрации поиска по пользовательскому вводу
function filterContent() {
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('.video-title').innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}
