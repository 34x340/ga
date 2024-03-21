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

//ВИСОКОСНИЙ РІК ВИСОКОСНИЙ РІК ВИСОКОСНИЙ РІК ВИСОКОСНИЙ РІК ВИСОКОСНИЙ РІК ВИСОКОСНИЙ РІК  // 
document.querySelector('.input-but__leap').addEventListener('click', function() {
    let userInput = document.getElementById('leap-input').value;

    // Перевірка чи введене число - "29.02"
    if (userInput === "29.02") {
        document.getElementById('yes-no-leap').textContent = "Ви народились у високосний рік";
    } else {
        document.getElementById('yes-no-leap').textContent = "Ви не народились у високосний рік";
    }
});
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
            highestNumberElement.textContent = `Найбільше число яке ви ввели - ${maxNumber} `
            highestNumberElement.style.color = "#039900" 
        } else {
            highestNumberElement.textContent = "не вказано";
            highestNumberElement.style.color = "red" 
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
            name: "Albert", 
            surname: "Einstein", 
            born: 1879, 
            dead: 1955, 
            id: 1 
        }, 
        { 
            name: "Isaac", 
            surname: "Newton", 
            born: 1643, 
            dead: 1727, 
            id: 2 
        }, 
        { 
            name: "Galileo", 
            surname: "Galilei", 
            born: 1564, 
            dead: 1642, 
            id: 3 
        }, 
        { 
            name: "Marie", 
            surname: "Curie", 
            born: 1867, 
            dead: 1934, 
            id: 4 
        }, 
        { 
            name: "Johannes", 
            surname: "Kepler", 
            born: 1571, 
            dead: 1630, 
            id: 5 
        }, 
        { 
            name: "Nicolaus", 
            surname: "Copernicus", 
            born: 1473, 
            dead: 1543, 
            id: 6 
        }, 
        { 
            name: "Max", 
            surname: "Planck", 
            born: 1858, 
            dead: 1947, 
            id: 7 
        }, 
        { 
            name: "Katherine", 
            surname: "Blodgett", 
            born: 1898, 
            dead: 1979, 
            id: 8 
        }, 
        { 
            name: "Ada", 
            surname: "Lovelace", 
            born: 1815, 
            dead: 1852, 
            id: 9 
        }, 
        { 
            name: "Sarah E.", 
            surname: "Goode", 
            born: 1855, 
            dead: 1905, 
            id: 10 
        }, 
        { 
            name: "Lise", 
            surname: "Meitner", 
            born: 1878, 
            dead: 1968, 
            id: 11 
        }, 
        { 
            name: "Hanna", 
            surname: "Hammarström", 
            born: 1829, 
            dead: 1909, 
            id: 12 
        } 
    ];
    
    const prompts = [
        'отримати масив вчених що народилися в 19 ст',
        // 'знайти суму років скільки прожили всі вченнів',
        'Відсортувати вчених по алфавіту',
        'Відсортувати вчених по кількості прожитих років',
        // 'Видалити з масива вчених що народилися в 15 або 16 або 17 столітті',
        'Знайти вченого який народився найпізніше.',
        'Знайти рік народження Albert Einstein',
        'знайти вчених прізвище яких починається на літеру С',
        'Видалити з масива всіх вчених імя яких починається на A',
        'Знайти вченого який прожив найбільше і вченого який прожив найменьше',
        'Знайти вчених в яких співпадають перші літери імені і прізвища',
        // 'Дізнатися чи всі вченні працювали в 19 столітті',
    ];
    
    const scientistsEl = document.querySelector('.info__scientists');
    
    scientists.forEach((scientist) => scientistsEl.innerHTML += `
        <li class="info__scientist" data-id="${scientist.id}">
            <p class="info__name">${scientist.name} ${scientist.surname}</p>
            <p class="info__lifeYears">${scientist.born}-${scientist.dead} years</p>
        </li>
    `);
    
    const promptsEl = document.querySelector('.info__prompts');
    
    prompts.forEach((scientist, idx) => promptsEl.innerHTML += `
        <li class="info__prompt">
            <button class="info__but" data-promptNum="${idx}">${scientist}</button>
        </li>
    `);
    
    const showScientists = (scientistsToShow) => {
        scientistsEl.innerHTML = '';
        if (Array.isArray(scientistsToShow)) {
            scientistsToShow.forEach((scientistId) => scientistsEl.innerHTML += `
                <li class="info__scientist" data-id="${scientistId}">
                    <p class="info__name">${scientists.find(scientist => scientist.id === scientistId).name} ${scientists.find(scientist => scientist.id === scientistId).surname}</p>
                    <p class="info__lifeYears">${scientists.find(scientist => scientist.id === scientistId).born}-${scientists.find(scientist => scientist.id === scientistId).dead} years</p>
                </li>
            `);
        }
        else {
            scientistsEl.innerHTML += `
                <li class="info__scientist" data-id="${scientistsToShow}">
                    <p class="info__name">${scientistsToShow.name} ${scientistsToShow.surname}</p>
                    <p class="info__lifeYears">${scientistsToShow.born}-${scientistsToShow.dead} years</p>
                </li>
            `;
        }
    }
    
    promptsEl.addEventListener('click', (e) => {
        switch (e.target.getAttribute('data-promptNum')) {
            case '0':
                showScientists(scientists.filter(scientist => scientist.born > 1800 && scientist.born <= 1900).map(scientist => scientist.id));
                break;
            case '1':
                showScientists(scientists.sort((a, b) => a.name.localeCompare(b.name)).map(scientist => scientist.id));
                break;
            case '2':
                showScientists(scientists.sort((a, b) => (b.dead-b.born) - (a.dead-a.born)).map(scientist => scientist.id));
                break;
            case '3':
                showScientists(scientists.sort((a, b) => b.born - a.born)[0]);
                break;
            case '4':
                showScientists(scientists.find((scientist) => scientist.name === 'Albert' && scientist.surname === 'Einstein'));
                break;
            case '5':
                showScientists(scientists.filter(scientist => scientist.surname.startsWith('C')).map(scientist => scientist.id));
                break;
            case '6':
                showScientists(scientists.filter(scientist => !(scientist.name.startsWith('A'))).map(scientist => scientist.id));
                break;
            case '7':
                showScientists([Math.max(...scientists.map(scientist => scientist.dead - scientist.born)), Math.min(...scientists.map(scientist => scientist.dead - scientist.born))].map(lifeYears => scientists.find(scientist => scientist.dead - scientist.born === lifeYears).id));
                break;
            case '8':
                showScientists(scientists.filter(scientist => scientist.name[0] === scientist.surname[0]).map(scientist => scientist.id));
                break;
        }
    });