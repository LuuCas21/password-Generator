'use script';

const passwordHover = document.querySelector('.password');

let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');

passwordHover.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

passwordHover.addEventListener('mouseout', function() {
    this.style.transform = 'none';
});

let charset = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ0123456789"; // Caracteres que vamos gerar na senha
let novaSenha = "";

console.log(charset.length);
console.log(sliderElement.value);

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n)); //charAt vai pegar a posição, por exemplo, se o valor dentro do charArt fosse 0 (charArt(0)) então seria a letra 'a'. Se fosse '2' então seria a letra 'c'.
    }

    //console.log(pass);
    password.innerHTML = pass;
    containerPassword.classList.remove('hide');
    novaSenha = pass;

    closeBox();
};

function copyPassword() {
    //alert('Senha copiada com sucesso!');
    navigator.clipboard.writeText(novaSenha);
    
    openBox();
};

function openBox () {
    document.querySelector('.successfullyCopied').style.visibility = 'visible';
    document.querySelector('.successfullyCopied').style.opacity = '1';
    document.querySelector('.successfullyCopied').style.bottom = '50px';
};

function closeBox() {
    document.querySelector('.successfullyCopied').style.visibility = 'hidden';
    document.querySelector('.successfullyCopied').style.opacity = '0';
    document.querySelector('.successfullyCopied').style.bottom = '0';
};