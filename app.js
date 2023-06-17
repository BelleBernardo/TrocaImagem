var botao = document.getElementById('clique');

botao.onclick = function(){
    if(botao.value === 'troca'){
        p1.src = 'images.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        p1.src = 'images(1).jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}