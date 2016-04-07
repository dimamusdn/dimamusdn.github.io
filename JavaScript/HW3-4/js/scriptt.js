var wrap = document.createElement('div');
    document.body.appendChild(wrap);
var title = document.createElement('h1');
    title.innerHTML = 'Тест по программированию';
var question = document.createElement('div');
    question.classList.add('question');
var questionTitle = document.createElement('h2');
var question1 = document.createTextNode('1. Вопрос №1');
var form = document.createElement('form');
var answers = document.createElement('ul');
var possibleAnswer = document.createElement('li');
var label = document.createElement('label');
var span = document.createElement('span');
var inputText1 = document.createTextNode('Вариант ответа №1');
var checkb = document.createElement('input');
    checkb.setAttribute('type', 'checkbox');
var btn = document.createElement('button');
    btn.classList.add('pure-button');
    btn.classList.add('pure-button-primary');
var divBtn = document.createElement('div');
    divBtn.classList.add('div-btn');


    wrap.classList.add('wrapper');
    wrap.appendChild(title);
    wrap.appendChild(question);
    question.appendChild(questionTitle);
    questionTitle.appendChild(question1);
    question.appendChild(form);
    form.appendChild(answers);
    answers.appendChild(possibleAnswer);
    possibleAnswer.appendChild(label);
    label.appendChild(checkb);
    label.appendChild(span);
    span.appendChild(inputText1);

var possibleAnswer2 = possibleAnswer.cloneNode(true);
    possibleAnswer2.querySelector('span').innerHTML='Вариант ответа №2';
    possibleAnswer.parentNode.appendChild(possibleAnswer2);
var possibleAnswer3 = possibleAnswer.cloneNode(true);
    possibleAnswer3.querySelector('span').innerHTML='Вариант ответа №3';
    possibleAnswer.parentNode.appendChild(possibleAnswer3);
var question2 = question.cloneNode(true);
    question2.querySelector('h2').innerHTML='2. Вопрос №2'
    question.parentNode.appendChild(question2);
var question3 = question.cloneNode(true);
    question3.querySelector('h2').innerHTML='3. Вопрос №3'
    question.parentNode.appendChild(question3);

    wrap.appendChild(divBtn);
    divBtn.appendChild(btn);
    btn.innerHTML = 'Проверить мои результаты';


    document.body.querySelector('.wrapper').style.width = '1000px';
    document.body.querySelector('.wrapper').style.margin = '50px auto';
    document.body.querySelector('button').style.magin = '0 auto'
    question.querySelector('ul').style.listStyleType = 'none';
    question2.querySelector('ul').style.listStyleType = 'none';
    question3.querySelector('ul').style.listStyleType = 'none';
    wrap.querySelector('h1').style.textAlign = 'center';
    wrap.querySelector('.div-btn').style.marginLeft = '383px';
