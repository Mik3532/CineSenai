
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
};

document.querySelector('.card-number-input').addEventListener('keydown', function (e) {
    // Verifica se a tecla pressionada é um número
    (e.keyCode ? e.keyCode : e.which);
    if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    });
    
    /*document.querySelector('.card-number-input').addEventListener('input', (e) => {
        // Obtendo o valor atual do campo
        const cardNumber = e.target.value;
        // Removendo todos os espaços em branco do valor do campo
        const strippedCardNumber = cardNumber.replace(/\s/g, '');
        // Adicionando espaços em branco a cada 4 caracteres
          const formattedCardNumber = strippedCardNumber.replace(/(.{4})/g, '$1 ');
        // Definindo o valor formatado de volta no campo
          e.
         target.value = formattedCardNumber;
        });*/
document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
};
document.querySelector('.card-holder-input').addEventListener("keypress", function(e){
        // Verifica se a tecla pressionada é uma letra
    const keyCode = (e.keyCode ? e.keyCode : e.which);
    if(keyCode > 47 && keyCode < 58) {
        e.preventDefault(); 
    }
});

document.querySelector('.mes-input').oninput = () =>{
    document.querySelector('.exp-mes').innerText = document.querySelector('.mes-input').value;
};

document.querySelector('.ano-input').oninput = () =>{
    document.querySelector('.exp-ano').innerText = document.querySelector('.ano-input').value;
};

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
};

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
};

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
};


