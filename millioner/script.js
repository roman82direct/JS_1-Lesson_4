var total = 0;
var countFifty = false;
var countHelp = false;
var countCall = false;
var countError = false;

var questions = [question1, question2, question3, question4, question5];
var prompters = ['50/50', 'Помощь зала', 'Звонок другу', 'Право на ошибку'];
var list = document.getElementsByClassName('item');
var rquest = questions.reverse();

for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = rquest[i].cost;
}

var prompter = document.getElementsByClassName('prompt');
for (i in prompter){
    prompter[i].innerHTML = prompters[i];
}
var answer = document.getElementsByClassName('answer');

rightClick(question1.q, question1.a1, question1.a2, question1.a3, question1.a4);

// Первый вопрос
// обработка подсказок
p1.onclick = () => {                            //50 на 50
    fillFifty(a2, a3);
    fillPrompt(p1);
};
p2.onclick = () => fillHelp(a1, a2, a3, a4);    //Помощь зала
p3.onclick = () => fillCall(a1);                //Звонок другу
p4.onclick = () => {                            //Право на ошибку
    countError = true;
    fillPrompt(p4);
    a1.onclick();
}

// обработка ответов
a1.onclick = function(){
    total += question1.cost;
    setTimeout(function(){
        a1.style = 'background-color: darkgreen';
        li5.style = 'color: red; font-weight: 600';
    }, 400);
    setTimeout(function(){
        score.innerHTML = 'Ваш выигрыш: ' + total + ' рублей';
        rightClick(question2.q, question2.a1, question2.a2, question2.a3,question2.a4);
        a1.style = 'background-color: white';
        a1.style = 'hover{background-color: goldenrod};';

    }, 1000);
    
    // Второй вопрос
    if(!countFifty){
    p1.onclick = () => {
        fillFifty(a1, a4);
        fillPrompt(p1);
        }
    } else fillPrompt(p1);
    
    !countHelp ? p2.onclick = () => fillHelp(a2, a1, a3, a4) : fillPrompt(p2);
    !countCall ? p3.onclick = () => fillCall(a2) : fillPrompt(p3);

    if (!countError){
        p4.onclick = () => {
            countError = true;
            fillPrompt(p4);
            a2.onclick();
        }
    }
        a2.onclick = function(){
        total += question2.cost;
        setTimeout(function(){
            a2.style = 'background-color: darkgreen';
            li4.style = 'color: red; font-weight: 600';
        }, 500);
        setTimeout(function(){
            score.innerHTML = 'Ваш выигрыш: ' + total+ ' рублей';
            rightClick(question3.q, question3.a1, question3.a2, question3.a3,question3.a4);
            a2.style = 'background-color: white';
            a2.style = 'hover{background-color: goldenrod};'
        }, 1500);

        //Третий вопрос
        if(!countFifty){
            p1.onclick = () => {
                fillFifty(a1, a2);
                fillPrompt(p1);
                }
            } else fillPrompt(p1);
        
        !countHelp ? p2.onclick = () => fillHelp(a3, a2, a1, a4) : fillPrompt(p2);
        !countCall ? p3.onclick = () => fillCall(a3) : fillPrompt(p3);

        if (!countError){
            p4.onclick = () => {
                countError = true;
                fillPrompt(p4);
                a3.onclick();
            }
        }
        a1.onclick = () => wrongClick(a1);
        a2.onclick = () => wrongClick(a2);
        a3.onclick = function(){
            total += question3.cost;
            setTimeout(function(){
                a3.style = 'background-color: darkgreen';
                li3.style = 'color: green; font-weight: 600';
            }, 400);
            setTimeout(function(){
                score.innerHTML = 'Ваш выигрыш: ' + total + ' рублей';
                rightClick(question4.q, question4.a1, question4.a2, question4.a3,question4.a4);
                a3.style = 'background-color: white';
                a3.style = 'hover{background-color: goldenrod};'
            }, 1000);

            //Четвертый вопрос
        if(!countFifty){
            p1.onclick = () => {
                fillFifty(a2, a3);
                fillPrompt(p1);
                }
            } else fillPrompt(p1);

        !countHelp ? p2.onclick = () => fillHelp(a4, a2, a1, a3) : fillPrompt(p2);
        !countCall ? p3.onclick = () => fillCall(a4) : fillPrompt(p3);
        
        if (!countError){
            p4.onclick = () => {
                countError = true;
                fillPrompt(p4);
                a4.onclick();
            }
        }
            a1.onclick = () => wrongClick(a1);
            a2.onclick = () => wrongClick(a2);
            a3.onclick = () => wrongClick(a3);
            a4.onclick = function(){
                total += question4.cost;
                setTimeout(function(){
                    a4.style = 'background-color: darkgreen';
                    li2.style = 'color: red; font-weight: 600';
                }, 600);
                setTimeout(function(){
                    score.innerHTML = 'Ваш выигрыш: ' + total+ ' рублей';
                    rightClick(question5.q, question5.a1, question5.a2, question5.a3,question5.a4);
                    a4.style = 'background-color: white';
                    a4.style = 'hover{background-color: goldenrod};'
                }, 1500);

                //Пятый вопрос
                if(!countFifty){
                    p1.onclick = () => {
                        fillFifty(a2, a3);
                        fillPrompt(p1);
                        }
                    } else fillPrompt(p1);

                !countHelp ? p2.onclick = () => fillHelp(a1, a2, a3, a4) : fillPrompt(p2);
                !countCall ? p3.onclick = () => fillCall(a1) : fillPrompt(p3);

                if (!countError){
                    p4.onclick = () => {
                        countError = true;
                        fillPrompt(p4);
                        a1.onclick();
                    }
                }
                a1.onclick = function(){
                    total += question5.cost;
                    setTimeout(function(){
                        a1.style = 'background-color: darkgreen';
                        li1.style = 'color: green; font-weight: 600';
                    }, 500);
                    setTimeout(function(){
                    score.innerHTML = 'Ваш выигрыш: ' + total + ' рублей';
                    ques.style = 'color: red; font-weight: 700';
                    rightClick('Поздравляем!!! Вы - миллионер!!!', '', '', '', '');
                    a1.style = 'background-color: white';
                    for (var a of answer){
                        fillPrompt(a);
                    }
                    
                    for (i in prompter){
                        fillPrompt(prompter[i]);
                    }
                    }, 1500);

                    setTimeout(function(){
                        modal.style = '';
                        modal.style.display = "block";
                        yn.style.display = 'flex';
                        mText.innerHTML = '<br><br>Сыграем еще раз?'
                        yes.onclick = () => window.location.reload();  
                        no.onclick = () => modal.style.display = "none";
                    }, 3000);
                }
                    a2.onclick = () => wrongClick(a2);
                    a3.onclick = () => wrongClick(a3);
                    a4.onclick = () => wrongClick(a4);
            }
        }
        a4.onclick = () => wrongClick(a4);
    }
    a1.onclick = () => wrongClick(a1);
    a3.onclick = () => wrongClick(a3);
    a4.onclick = () => wrongClick(a4);
}
a2.onclick = () => wrongClick(a2);
a3.onclick = () => wrongClick(a3);
a4.onclick = () => wrongClick(a4);