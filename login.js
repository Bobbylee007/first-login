

var email = document.getElementById("email");
var password = document.getElementById("password");
var btn = document.getElementById("btn");



 person = [{
    name_1: 'bobbylee',
    Email: 'osamoraustine@gmail.com',
    password: 'bobbylee2',
}];


btn.addEventListener('click', () => {
    for(let p of person){
        if (email.value == p.Email && password.value == p.password) {
            
            alert("You have been Logined In!");
        } else {
            alert("You have Entered a wrong Email or password!");
        }
    }
    // person.forEach(p => {
    //     if (email.value == p.Email && password.value == p.password) {
            
    //         alert("You have been Logined In!");
    //     } else {
    //         alert("You have Entered a wrong Email or password!");
    //     }
    // });

});