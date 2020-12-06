function Calculator () {
    this.read = function() {
        this.a = +prompt('더할 값1을 입력해주세요.', 0); 
        this.b = +prompt('더할 값2를 입력해주세요.', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
    
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );