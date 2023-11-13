function validarUsuario (user){
	return (user == "maggot_1999");
}

function validarSenha (password){
	return (password == "742617000027(sic)");
}

function validarFormulario(event) {
    event.preventDefault();

    const user = document.getElementById('user');
    const password = document.getElementById('password');


    if (!validarUsuario(user.value)) {
        alert("Usuário inválido.");
        return;
    }

    if (!validarSenha(password.value)) {
        alert("Senha inválida.");
        return;
    }

    alert("Login bem sucedido!");
	document.getElementById("forms").style.visibility = "hidden";
	document.getElementById("texto").style.visibility = "visible";
}

const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', validarFormulario);