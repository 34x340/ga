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

    // КАЛЬКУЛЯТОР КАЛЬКУЛЯТОР КАЛЬКУЛЯТОР КАЛЬКУЛЯТОР КАЛЬКУЛЯТОР КАЛЬКУЛЯТОР КАЛЬКУЛЯТОР 

    document.getElementById('equals').addEventListener('click', function() {
        let firstNumber = parseFloat(document.getElementById('first-input').value);
        let secondNumber = parseFloat(document.getElementById('second-input').value);
        let operation = document.querySelector('.button__list .active').textContent.trim();
        let result;
        
        switch(operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Invalid operation";
        }
        
        document.getElementById('result-p').textContent = result;
    });
    
    let buttons = document.querySelectorAll('.button__calculator');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ ВЧЕНІ 
    
    const scientists = [ 
        {
            name: "Marie",
            surname: "Curie",
            born: 1867,
            dead: 1934
        },
        {
            name: "Charles",
            surname: "Darwin",
            born: 1809,
            dead: 1882
        },
        {
            name: "Alexander",
            surname: "Fleming",
            born: 1881,
            dead: 1955
        },
        {
            name: "Gregor",
            surname: "Mendel",
            born: 1822,
            dead: 1884
        },
        {
            name: "Thomas",
            surname: "Edison",
            born: 1847,
            dead: 1931
        },
        {
            name: "Albert",
            surname: "Einstein",
            born: 1879,
            dead: 1955
        },
        {
            name: "Nikola",
            surname: "Tesla",
            born: 1856,
            dead: 1943
        },
        {
            name: "Louis",
            surname: "Pasteur",
            born: 1822,
            dead: 1895
        },
        {
            name: "Michael",
            surname: "Faraday",
            born: 1791,
            dead: 1867
        },
        {
            name: "William",
            surname: "Herschel",
            born: 1738,
            dead: 1822
        },
        {
            name: "Galileo",
            surname: "Galilei",
            born: 1564,
            dead: 1642
        },
        {
            name: "Jacques",
            surname: "Curie",
            born: 1859,
            dead: 1906
        }
    ];

    const prompts = [
        'Які вчені народилися в 19 ст.',
        'Відсортувати вчених за алфавітом',
        'Відсортувати вчених за кількістю прожитих років',
        'Знайти вченого, який народився найпізніше',
        'Знайти рік народження Albert Einstein',
        'знайти вчених прізвище яких починається на літеру С',
        'Видалити з масива всіх вчених імя яких починається на A',
        'Знайти вченого який прожив найбільше і вченого який прожив найменьше',
        'Знайти вчених в яких співпадають перші літери імені і прізвища',
    ];

    