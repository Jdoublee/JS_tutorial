let num = prompt('enter n.','');

let i = 2;
let j;
while(i<=num){
    for(j=2;j<i;j++){
        if(i%j==0)
            break;
    }
    if(i==j)
        alert(i);
    i++;
}