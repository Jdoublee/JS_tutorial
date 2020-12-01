function pow(x,n) { // 중괄호
  let result=1;

  for(let i=0;i<n;i++) {
      result *= x; // 공백 추가
  }

  return result;
}

let x=prompt("x?",''), n=prompt("n?",''); // 세미콜론
// 들여쓰기
if (n<=0) {
  alert(`Power ${n} is not supported,
   please enter an integer number greater than zero`);
} else {
  alert(pow(x,n));
}