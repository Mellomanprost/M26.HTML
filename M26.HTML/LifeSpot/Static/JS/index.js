function handleSession() {
    let session = new Map();
    session.set('userAgent', window.navigator.userAgent);

    // Запросим возраст пользователя и сохраним в переменную
    let userAge = prompt('Укажите свой возраст: ');
    session.set('age', userAge);

    if (session.get('age') >= 18) {
        let curDate = new Date().toLocaleString();
        session.set('currentDate', curDate);
        alert(`Приветствуем на LifeSpot!\nТекущее время: ${curDate}`);
    } else {
        alert('Наш сайт только для лиц старше 18 лет! Вы будете перенаправлены');
        window.location.href = "http://www.google.com";
    }
    // Вывод в консоль
    for (let item of session) {
        console.log(item);
    }
}


function filterContent() {
    let inputString = document.getElementsByTagName('input')[0].value;
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector('.video-title').innerText;
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
