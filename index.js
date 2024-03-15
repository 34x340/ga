// КАЛЬКУЛЯТОР ЧАСУ !!!!!!!!!!!!!!

function calculateTime() {
    let inputValue = parseInt(document.getElementById('start-timer').value);

    let days = Math.floor(inputValue / 86400);
    let hours = Math.floor((inputValue % 86400) / 3600);
    let minutes = Math.floor((inputValue % 3600) / 60);
    let seconds = inputValue % 60;
    let timeOutput = document.querySelector('.time-calc__time');
    timeOutput.textContent = ` ${days}дн   ${hours}:${minutes}:${seconds}`;
}

document.querySelector('.time-button__calculator').addEventListener('click', calculateTime);

// НАЙБІЛЬШЕ ЧИСЛО НАЙБІЛЬШЕ ЧИСЛО НАЙБІЛЬШЕ ЧИСЛО НАЙБІЛЬШЕ ЧИСЛО НАЙБІЛЬШЕ ЧИСЛО НАЙБІЛЬШЕ ЧИСЛО 

const inputOne = document.getElementById('one-input');
    const inputTwo = document.getElementById('two-input');
    const inputThree = document.getElementById('three-input');
    const highestNumberElement = document.getElementById('time-result');

    function findHighestNumber() {
        const num1 = parseFloat(inputOne.value);
        const num2 = parseFloat(inputTwo.value);
        const num3 = parseFloat(inputThree.value);
        if (!isNaN(num1) || !isNaN(num2) || !isNaN(num3)) {
            const maxNumber = Math.max(num1, num2, num3);
            highestNumberElement.textContent = `Найбільше число яке ви ввели - ${maxNumber} `; 
        } else {
            highestNumberElement.textContent = "не вказано";
        }
    }
    inputOne.addEventListener('input', findHighestNumber);
    inputTwo.addEventListener('input', findHighestNumber);
    inputThree.addEventListener('input', findHighestNumber);

// КАМІНЬ НОЖИЦІ ПАПІР КАМІНЬ НОЖИЦІ ПАПІР КАМІНЬ НОЖИЦІ ПАПІР КАМІНЬ НОЖИЦІ ПАПІР 

const choices = ["rock", "paper", "scissors"];
    let computerWins = 0;
    let userWins = 0;

    document.getElementById("rock-button").addEventListener("click", function () {
        playGame("rock");
    });

    document.getElementById("scissors-button").addEventListener("click", function () {
        playGame("scissors");
    });

    document.getElementById("paper-button").addEventListener("click", function () {
        playGame("paper");
    });

    document.getElementById("computer-variant").addEventListener("click", function () {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playGame(computerChoice);
    });

    function playGame(userChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result = "";

        if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            userWins++;
            result = "Ви виграли!";
        } else if (userChoice === computerChoice) {
            result = "Нічия!";
        } else {
            computerWins++;
            result = "Комп'ютер виграв!";
        }

        document.getElementById("winOrLose").innerHTML = result;
        document.getElementById("comp-score-text").innerHTML = computerWins;
        document.getElementById("user-score-text").innerHTML= userWins;
    }