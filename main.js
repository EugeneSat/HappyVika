VANTA.BIRDS({
  el: "#content",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
});

const btnStart = document.getElementById('btnStart');
const cont_1 = document.getElementById('cont_1');
const cont_2 = document.getElementById('cont_2');
const cont_3 = document.getElementById('cont_3');
const cont_4 = document.getElementById('cont_4');
const div_img_1 = document.getElementById('div_img_1');
const div_img_2 = document.getElementById('div_img_2');
const div_img_3 = document.getElementById('div_img_3');
const div_img_4 = document.getElementById('div_img_4');

const input = document.getElementById("input1");

const btnTwo = document.getElementById('btnTwo');
const error1 = document.createElement('div');
const div_input_btn = document.getElementById('div_input_btn');
error1.className = 'error1';


const status1 = function() {


  btnStart.addEventListener('click', () => {
    div_img_1.style.display = 'none';
    cont_1.style.display = 'block';
    window.scrollTo({
      top: 750,
      left: 0,
      behavior: 'smooth'
    });

  });

};
status1();

const bigTest = function() {



  const test = function() {
    let count = document.getElementsByClassName('div_test_q').length; //Количество вопросов
    let answers = document.querySelectorAll('.div_test_q'); //Все элементы div с вопросами (???)
    const quiz = document.querySelector('.quiz');
    const cont = document.querySelector('.cont');
    let score = 0; //Количество верных ответов
    let rightAnswers = ["value2", "value1", "value1"]; //Список верных ответов

    for (let i = 0; i < count; i++) {
      let chosenAnswer = answers[i].querySelector("input[type='radio']:checked"); //Из массива вопросов выбираем элемент радио, который выбрал пользователь
      if (chosenAnswer && chosenAnswer.id == rightAnswers[i]) {
        score++;
      }
      //console.log("Выбранный ответ: " + chosenAnswer && chosenAnswer.parentNode.textContent);
      //console.log("Правильный ответ: " + rightAnswers[i]);
      //console.log("Очки: " + score);
    }

    const scoreHtml = document.createElement('div');
    const btnOne = document.getElementById('btnOne');

    scoreHtml.className = 'scoreHtml';

    cont.append(scoreHtml);
    if (score == 0) {
      quiz.style.display = 'none';
      scoreHtml.innerHTML = '<p class="score_p">Не,ну это ни в какие ворота.0/3...</p>';
      btnOne.style.display = 'block';
      console.log(0);
    } else if (score == 1) {
      quiz.style.display = 'none';
      scoreHtml.innerHTML = '<p class="score_p">1/3. Неплохо,но и не хорошо</p>';
      btnOne.style.display = 'block';
      console.log(1);
    } else if (score == 2) {
      quiz.style.display = 'none';
      scoreHtml.innerHTML = '<p class="score_p">2/3. Да ты знала ответы,зачем ответила неправильно??</p>';
      btnOne.style.display = 'block';
      console.log(2);

    } else {
      quiz.style.display = 'none';
      scoreHtml.innerHTML = '<p class="score_p">3/3.Я так и знал, что ты справишься. Красоточка!</p>';
      btnOne.style.display = 'block';
      console.log(3);
    }


  };
  const btnQuiz = document.getElementById('btnQuiz');
  btnQuiz.addEventListener('click', test);

};
bigTest();

const status2 = function() {
  btnOne.addEventListener('click', () => {
    div_img_2.style.display = 'none';
    cont_2.style.display = 'block';
    window.scrollTo({
      top: 1200,
      left: 0,
      behavior: 'smooth'
    });

  });
};
status2();

const inp = function() {



  btnTwo.addEventListener('click', () => {
     //error1.innerHTML = '';
    if (input.value.toUpperCase() === 'НОСКИ') {
      div_img_3.style.display = 'none';
      cont_3.style.display = 'block';
      window.scrollTo({
        top: 1800,
        left: 0,
        behavior: 'smooth'
      });
      error1.textContent = '';
    }




  });
}
inp();

const inp2 = function() {
  const input2 = document.getElementById("input2");
    const btnThree = document.getElementById('btnThree');

 btnThree.addEventListener('click', ()=>{
    if (input2.value.toUpperCase() === 'БУЛОЧКА') {
      div_img_4.style.display = 'none';
      cont_4.style.display = 'block';
      window.scrollTo({
        top: 2450,
        left: 0,
        behavior: 'smooth'
      });
        error1.textContent = '';
    }
    else{

      error1.textContent = 'Неправильный ввод,попробуй снова)';
      div_input_btn.append(error1);

    }
    });

};
inp2();


const modal = function() {
    const modalWinow = document.querySelectorAll('.div_modal');
    const modalBtn = document.querySelectorAll('.img_pods');
    modalBtn.forEach((btn) => {
      btn.addEventListener('mouseover', ()=>{
          modalWinow.forEach(modal => {
               modal.classList.add('active');
               modal.style.transition = '0.4s';
          });


      });
    });
    modalBtn.forEach((btn) => {
      btn.addEventListener('mouseout', ()=>{
          modalWinow.forEach(modal => {
                modal.classList.remove('active');
          });


      });
    });



  //  modalBtn.addEventListener('mouseover', ()=>{
  //     modalWinow.classList.add('active');

  //  });
  //  modalBtn.addEventListener('mouseout', ()=>{
  //     modalWinow.classList.remove('active');

  //  });

};
modal();
