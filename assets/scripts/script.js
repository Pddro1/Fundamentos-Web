//!var nome = 'Pedro' //variavel Global
//!let nome = "Pedro" // Variavel Local, pode alterar o valor
//!const nome = `Pedro` // Variavel Local, não pode alterar o valor

/*const perfil = document.getElementById('perfil') //! ID
const perfil = document.getElementsByClassName('perfil') //! CLASSE
const perfil = document.getElementsByName('name') //! NOME
const perfil = document.getElementsByTagName('name') //!TAG
const perfil = document.querySelector('.perfil') //! TUDO

function aparecerNome(){
    let data = new Date()
    alert(data)
}*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

let nomeOK = false;
let emailOk = false;
let assuntoOk = false;

function validaNome(){
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        nomeOK = false;
    } 

    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOK = true;
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
        emailOk = false;
    }

    else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true;
    }
}

function validaEmail2(){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    if(email.value.match(regex)){
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true;
    }
    else{
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
        emailOk = false;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false;
    }

    else {
        txtAssunto.style.display = 'none'
        assuntoOk = true;
        txtAssunto.innerHTML = assunto.value.lenght + '/100'
    }

}

function enviar() {
    if(nomeOK == true && emailOk == true && assuntoOk == true){
        alert(nome.value + ' ,Formulário enviado com sucesso!')
    }
    else {
        alert('Preencha o formulário corretamente antes de enviar')
    }
    
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}

