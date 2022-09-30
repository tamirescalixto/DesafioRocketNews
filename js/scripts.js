function send(){
    let email = document.getElementById("email").value;

    if (email) {
        alert(`Email ${email} cadastrado com sucesso!`);
    } else {
        alert("Por favor, preencha o campo email!");
    }
}