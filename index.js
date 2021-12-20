let answers = {                               // обьект с массивами ответов зно
  '2019': [a1, a4, a5, a3, a1],
  '2020': [a5, a4, a1, a1, a5],
  '2021': [a3, a1, a5, a1, a4]
}                                               
let imgNum = 0;
let answNum = 0;
let sum = [0, 0, 0, 0, 0];                    // массив для проверки правильности ответа
list.style.display = 'none';                  // скрываем список тестов по умолчанию
btn.disabled = true;

let year = title.innerHTML.slice(-4);         // получаем год из тега title взяв последние 4 символа
let radios = document.querySelectorAll('input[type=radio]'); 
radios.forEach(function(radio) {              // если выбирается любой вариант кнопка ответить активируется
  radio.addEventListener('change', enable);
});
function enable(){
  btn.disabled = false;
}

btn.addEventListener("click", fnc);
btn_next.addEventListener("click", fnc);
function fnc() {                              // функция заменяющая картинку на следующую
  imgNum++;
  if (imgNum > answers[year].length - 1) {
    return;
  }
  image.src = 'img/' + year + '/' + (imgNum + 1) + '.png';
}
btn.addEventListener("click", fnc1);
btn_next.addEventListener("click", fnc1);
function fnc1() {                              // функция проверяющая на правильность ответа
  if (answers[year][answNum].checked) {
    sum[answNum] = 1;
  }
  answNum++;
  radios.forEach(function(radio) {              // очистить выбор при переключении вопроса
    radio.checked = false;
  });
  btn.disabled = true;
  if (answNum == answers[year].length) {       // если вопрос последний - подсчет очков суммой массива sum
    let ans = sum.reduce((sum, answer) => sum + answer);  
    let display = "Ваш результат : " + ans;
    image.style.display = 'none';              // и сокрытие ненужных блоков и показ нужных
    table.style.display = 'none';
    buttons.style.display = 'none';
    list.style.display = 'block';
    answer.innerHTML = display;
  }
}
btn_prev.addEventListener("click", prev);
function prev() {                              // функция предыдущего вопроса
  if (imgNum == 0) {
  }
  else {
    imgNum--;
    image.src = 'img/' + (imgNum + 1) + '.png';
  }
}