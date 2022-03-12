var answerOnQuestionType1 = document.querySelectorAll('.type1')
var btn = document.querySelector('#checkRes')
var answerType1 = ['процессор', '8', 'windows', 'видеокарта', 'жёсткий диск']
var answerType2_1 = 'Оперативная память'
var answerType2_2 = 'Нет'

var answerOnQuestionType2_1 = document.querySelectorAll('[name="radio1"]')
var answerOnQuestionType2_2 = document.querySelectorAll('[name="radio2"]')

var rightAnswer = 0

btn.addEventListener('click', CheckResults)
function CheckResults(){
    countRightType1()
    countRightType2(answerOnQuestionType2_1, answerType2_1)
    countRightType2(answerOnQuestionType2_2, answerType2_2)
    alert("Количество правильных ответов - " + rightAnswer)
}


function countRightType1(){
    for (var i = 0; answerOnQuestionType1.length > i ; i++) {
        answerOnQuestionType1[i].value = answerOnQuestionType1[i].value.toLowerCase()
    }
    for(var i = 0; answerType1.length > i; i++){
        if(answerType1[i] === answerOnQuestionType1[i].value){
            rightAnswer++
        }
    }
}
function countRightType2(listAnswerOnQuestion, answer){
    for(var i = 0; i < listAnswerOnQuestion.length; i++){
        if(listAnswerOnQuestion[i].checked &&listAnswerOnQuestion[i].value === answer){
            rightAnswer++
            break
        }
    }
}