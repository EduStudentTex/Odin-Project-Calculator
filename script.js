

class Calculator {

    constructor() {
        this.numbers = document.querySelectorAll('.number'); 
        this.operators = document.querySelectorAll('.operator');
        this.previousDisplay = null;
      }
    
    updateDisplay(element, selector) {

        console.log(this.previousDisplay);

        if (this.previousDisplay == "number" && selector != "operator") {

            const display = document.querySelector('.current-display');
            display.textContent += element;
            this.previousDisplay = selector;
            console.log(this.previousDisplay);

        } else {

            if(this.previousDisplay === null && selector == "number") {
                
                const display = document.querySelector('.current-display');
                display.textContent += element;
                this.previousDisplay = selector;
                console.log(this.previousDisplay);
                

            } else if (this.previousDisplay == "number" && selector == "operator") {
                
                const display = document.querySelector('.current-display');
                display.textContent += element;
                this.previousDisplay = selector;
                console.log(this.previousDisplay);
            
            } else if (this.previousDisplay == "operator" && selector == "number") {
                
                const display = document.querySelector('.current-display');
                display.textContent += element;
                this.previousDisplay = selector;
                console.log(this.previousDisplay);
                
            } else {
                return;
            }
        }
        
    }

    setupEventListeners() {

        this.numbers.forEach(number => {
          number.addEventListener('click', event => this.updateDisplay(event.target.textContent, number.className));
        });

        this.operators.forEach(operator => {
            operator.addEventListener('click', event => this.updateDisplay(event.target.textContent, operator.className));
        });

    }

}

const calculator = new Calculator();

calculator.setupEventListeners();


