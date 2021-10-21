/*---SCRIPT----*/
var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
var menubtnclass = document.getElementsByClassName("cli-btn")
sideNav.style.right = "-250px";

function closesidebar() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/close.png";
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "images/pic1.jpg";

    }
}

for (var i = 0; i < menubtnclass.length; i++) {
    menubtnclass[i].onclick = closesidebar;
}

menubtn.onclick = closesidebar;
var scroll = new SmoothScroll('a[href*="#"]',
    {
        speed: 1000,
        speedAsDuration: true
    });


//Form Validation

function phonenumber(number) {
    var phoneno = /^\d{10}$/;
    if (number.value.match(phoneno)) {
        return true;
    }
    else {
        alert("Invalid Phone Number");
        return false;
    }
}

function ename(name) {
    var empname = name.value;
    if (empname.length < 3) {

        alert("Name is too Short");
        return true;
    }
    else {
        return false;
    }
}

function emailid(email) {
    var emid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(emid)) {
        return true;
    }
    else {
        alert("Invalid Email");
        return false;
    }
}

function validpass(password) {
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (password.value.match(pass)) {
        return true;
    }
    else {
        alert("Invalid Password");
        // Password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        return false;
    }
}

