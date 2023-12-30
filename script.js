let randomNumber = Math.round(Math.random() * 4);

const luck = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão!",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
]

const screenOne = document.querySelector('.screenOne');
const screenTwo = document.querySelector('.screenTwo');

document.querySelector('img').addEventListener("click", handleImgClick)
document.querySelector('button').addEventListener("click", handleBackClick)


function handleImgClick(){
    toggleScreen()
    screenTwo.querySelector('.luck').innerHTML = luck[randomNumber];
}

function handleBackClick(event){
    event.preventDefault();
    toggleScreen()
    randomNumber = Math.round(Math.random() * 4);

}

function toggleScreen () {
    screenOne.classList.toggle('hide');
    screenTwo.classList.toggle('hide');
}
