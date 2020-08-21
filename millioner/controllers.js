function rightClick(question, var1, var2, var3, var4){
    ques.innerHTML = question;
    a1.innerHTML = var1;
    a2.innerHTML = var2;
    a3.innerHTML = var3;
    a4.innerHTML = var4;
}

function wrongClick(element) {
    setTimeout(() => element.style = 'background-color: darkred', 400);
    setTimeout(function(){
        total = total >= question3.cost ? question3.cost : 0;
        modal.style.display = "block";
        cl.style.display = 'none';
        yn.style.display = 'flex';
        mText.innerHTML = 'К сожалению, Вы ошиблись.<br><br>Ваш выигрыш: ' + total + ' рублей.<br><br><hr><br>Сыграем еще раз?'
        window.onclick = (event) => {
            if (event.target == modal) {
            modal.style.display = 'block';
            }
        }
        yes.onclick = () => {
            window.location.reload();  
        };
        no.onclick = () => {
            score.innerHTML = 'До скорых встреч!';
            rightClick('Выигрыш: ' + total + ' рублей', '', '', '', '');
            for (i in prompter){
                fillPrompt(prompter[i]);
            }
            for (var a of answer){
                fillPrompt(a);
            }
            modal.style.display = "none";
        }
        element.style = 'background-color: white';
    }, 800);
}

function fillFifty(el1, el2){
    el1.innerHTML = '';
    el1.onclick = null;
    el2.innerHTML = '';
    el2.onclick = null;
    countFifty = true;
}

function fillCall(el) {
    modal.style.display = 'block';
    yn.style.display = 'none';
    mText.innerHTML = 'Друг считает, что правильный ответ - ' + el.innerHTML;
    cl.onclick = () => {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    countCall = true;
    fillPrompt(p3); 
};

function fillHelp(el1, el2, el3, el4) {
    modal.style.display = 'block';
    yn.style.display = 'none';
    mText.innerHTML = 'Результаты голосования зала:<br><hr><br>'
                         + el1.innerHTML + ' - 70%<br><br>'
                         + el2.innerHTML + ' - 15%<br><br>'
                         + el3.innerHTML + ' - 10%<br><br>'
                         + el4.innerHTML + ' - 5%';
    cl.onclick = () => {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    countHelp = true;
    fillPrompt(p2); 
};

function fillPrompt(element){
    element.innerHTML = '';
    element.onclick = null;
    element.style = 'background-color: white; cursor: default';
}