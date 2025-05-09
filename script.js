const alternatives = [
    {text:"", images:"images/cat-01.gif"},
    {text:"Te prometo que será inolvidable", images:"images/cat-02.gif"},
    {text:"Piénsalo de nuevo", images:"images/cat-03.gif"},
    {text:"Vamos, porfavor di que si", images:"images/cat-04.gif"},
    {text:"En verdad quiero salir contigo", images:"images/cat-05.gif"}
];
const ohyes = {text:"Sabía que aceptarías", images:"images/cat-yes.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'SÍ'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});