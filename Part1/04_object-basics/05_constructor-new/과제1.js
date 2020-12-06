let obj = {};
// 동일한 객체를 반환하도록 해줌
function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A;
let b = new B;

alert( a == b ); // true