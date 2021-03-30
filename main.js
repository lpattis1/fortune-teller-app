let fortuneResetBtn = document.querySelector(".reset-btn");
let fortuneYesNoBtn = document.querySelector(".yes-or-no");

let fortuneYesNoAnswers = ["Yes", "No", "Maybe", "Answer not clear at this time", "Ask later", "Outlook good", "Does not look good"];

function crystalChange(){
    let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let hash1 = "#";
    let hash2 = "#";
    let percent = 70 + "%";
    for(let i = 0; i < 6; i++){
        hash1 += hexValues[Math.floor(Math.random() * 16)];
        hash2 += hexValues[Math.floor(Math.random() * 16)];
    }

    document.querySelector(".crystal__ball").style.background = `radial-gradient(${hash1}, ${percent}, ${hash2}`;

}

function fortuneYesNoInput(){
    let userQuestion = document.querySelector(".fortune__input");
    let userFortune = document.querySelector(".fortune-answer").innerHTML = fortuneYesNoAnswers[Math.floor(Math.random() * 7)];
}

fortuneYesNoBtn.addEventListener("click", function(){
    fortuneYesNoInput();
    crystalChange();
})

fortuneResetBtn.addEventListener("click", function(){
    location.reload();
})