function checkData(name, password) {
    if (name == "Ariana Salgado" && password == "as123") {
        return true;
    } else if (name == "Oswaldo Perez" && password == "op123") {
        return true;
    } else if (name == "Leonardo Rivas" && password == "lr123") {
        return true;
    }
    return false;
}

function logIn(option) {
    let name = null;
    if (document.getElementById("nameInput").value != "") {
        name = document.getElementById("nameInput").value
    } else {
        name = document.getElementById("nameSignUpInput").value;
    }
    let password = null;
    if (document.getElementById("loginPasswordInput").value != "") {
        password = document.getElementById("loginPasswordInput").value
    } else {
        password = document.getElementById("signupPasswordInput").value;
    }

    //Validamos campos
    if (option === 1) {
        if (name == "" || password == "") {
            alert("Por favor, verifica los datos solicitados");
            return;
        }
    } else {
        let email = document.getElementById("emailInput").value;
        if (email == "" || password == "" || name == "") {
            alert("Por favor, verifica los datos solicitados");
            return;
        }
    }

    if (checkData(name, password)) {
        $(location).prop('href', 'profile.html' + '?name=' + name)   
    } else {
        alert("Credenciales incorrectas")
    }
}

function logOut() {
    $(location).prop('href', 'index.html')
}

function showForm(option) {
    const signIn = document.getElementById('signInForm');
    const signUp = document.getElementById('signUpForm');

    if (option === 0) {
        $(signIn).show(500)
        $(signUp).hide(500)
    } else {
        $(signIn).hide(500)
        $(signUp).show(500)
    }
}