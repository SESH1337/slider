
let dom = document;
let body = dom.querySelector('body');
let btns = dom.querySelectorAll('.button')
let contSlider = dom.querySelector('.slider');
let first = dom.querySelector('.Left');
let second = dom.querySelector('.second')
let third = dom.querySelector('.third')
let four = dom.querySelector('.four')
let count = 0;

(function(){



const pictures = [
            1,
            2,
            3,
            4
        ];



first.addEventListener('click', firstFun);
function firstFun() {
    if (first.classList.contains('first')){
         let index = pictures.indexOf(1);
         contSlider.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
            body.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
    }
}

// Second Dot
second.addEventListener('click', sec);
function sec() {
    if(second.classList.contains('second')){
        let index = pictures.indexOf(2);
        contSlider.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
           body.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
    }
}


// Third Dot
third.addEventListener('click', FunTh) 
    function FunTh() {
        if (third.classList.contains('third')){
            let index = pictures.indexOf(3);
        contSlider.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
           body.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
        }
    }

// Last Dot
four.addEventListener('click', Funfour) 
    function Funfour() {
        if (four.classList.contains('four')){
            let index = pictures.indexOf(4);
        contSlider.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
           body.style.backgroundImage = `url('./img/${pictures[index]}.jpg')`;
        }
    }


})();
