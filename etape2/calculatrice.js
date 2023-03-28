class Calculator {
    constructor() {
        this.input = document.getElementById("input");
        this.result = document.getElementById("result");
    }

    addToInput(charClicked) {
        this.input.value += charClicked;
    }
  
    clearInput() {
        this.input.value = "";
    }
  
    computeResult() {
        var input = this.input.value;
        try {
            var result = eval(input);
            this.result.value = input + " = " + result;
        } catch (error) {
            this.result.value = 'Error';
        }
        this.clearInput(); 
    }
}

let calculator = new Calculator();
    
