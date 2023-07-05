function login(form) {
 if (form.u.value=="juan") {
    if (form.p.value=="12345") {
        location="./Menu.html";
    } else {
        alert("password error");
    }
    
 } else {
    alert ("user error");
 }


}

