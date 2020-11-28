function pow(x, n){
    if(n<1){
        let nn = alert('n은 1 이상의 자연수여야 합니다.','');
        pow(x, nn);
    }
    let res = 1;
    for(let i=0;i<n;i++){
        res *= n;
    }
    alert(res);
}