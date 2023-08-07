function check(form) {
    if(form.email.value=="sukanta123@gmail.com" && form.password.value=="1234")
    {
        window.open("index.html");
    }
    else
    {
        alert("Enter valid user name and password");
    }
}