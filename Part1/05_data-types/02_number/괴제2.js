function readNumber() {
    let n;
  
    do {
      n = prompt("숫자를 입력하세요.", 0);
    } while ( !isFinite(n) );
  
    if (n === null || n === '') 
      return null;
    
    return +n;
  }
  
  alert(`Read: ${readNumber()}`);