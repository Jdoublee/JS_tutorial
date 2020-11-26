let input = prompt("Who's there?", "");
if (input == '' || input == null){
    alert('Canceled');
}else if(input != 'Admin'){
    alert("I don't know you");
}else{
    let pw = prompt("Password?", "");
    if (pw == '' || pw == null)
        alert('Canceled');
    else if(pw != 'TheMaster')
        alert('Wrong password');
    else
        alert('Welcome!');
}