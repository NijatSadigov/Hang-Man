//data
const word = 'abc';
const buttons ='abcdefghijklmnopqrtsruvwxyz';
const guesses=[];
const maxB=9;
let badtrys=0;
//selected elements
const endDiv =document.querySelector(`#end-of-game`);
const scoreDiv =document.querySelector('#score');
const theWordDiv = document.querySelector('#the-word');
const lettersDiv = document.querySelector('#letters');
//cases
function isLost(){if(badtrys==9)return true;else return false;}
function isWon( ){
    return word.split('').every(letter => guesses.includes(letter));



}

//event handletrs
lettersDiv.addEventListener('click',onButtonClick);
function onButtonClick(e){
if(e.target.matches('button')){
    const button = e.target;
    //read
    const letter = button.innerText; //read item of value
//process
guesses.push(letter);
badAttempts (letter);
//write

//declerative
theWordDiv.innerHTML = word.split('').map(letter => `<span>${guesses.includes(letter) ? letter : ''}</span>`).join('');

scoreDiv.innerHTML = `SCORE: ${badtrys}/${maxB}`
//imperative
button.disabled = true;
const svgE1 = document.querySelector(`svg > *:nth-child(${badtrys})`);
if(svgE1) 
svgE1.classList.add('show');

if(isLost()){endDiv.innerHTML=` <span>You lose!</span>
<button>Play again!</button>`;endDiv.hidden=false;
lettersDiv.hidden=true;
theWordDiv.innerHTML = word.split('').map(letr=> `<span>${letr}</span>`   );

}
if(isWon()){endDiv.innerHTML=` <span>You win!</span>
<button>Play again!</button>`;endDiv.hidden=false;
lettersDiv.hidden=true;
}

}

}


//on page load
theWordDiv.innerHTML = word.split('').map(letter => `<span></span>`).join('');

lettersDiv.innerHTML = buttons.split('').map(letter => `<button>${letter}</button>`).join('');
function badAttempts (e){
    let arr =word.split("");
    if(!arr.includes(e)){badtrys=badtrys+1;}
    


}


