

let perguntas = document.querySelectorAll(".conteudo")

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", function(){
        let perguntaAberta = document.querySelector(".mostrar")

        if(pergunta === perguntaAberta){
            pergunta.classList.remove("mostrar")
        }else{
            pergunta.classList.add("mostrar")
        }

        perguntaAberta.classList.remove("mostrar")
    })
    
});
