let calculator = {
    a : 0,
    b : 0,
    read() {
        let input1 = prompt('더할 값1을 입력해주세요.', 0); // this.a = +prompt('첫 번째 값:', 0)
        let input2 = prompt('더할 값2를 입력해주세요.', 0);
        this.a = Number(input1);
        this.b = Number(input2);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );