function RolarProFim(){
    window.scrollTo(0, document.body.scrollHeight);
    location.reload()
}

function CopiaLink(copia){
    if(copia == 1){navigator.clipboard.writeText("christianotteromarques@gmail.com")};
    if(copia == 2){navigator.clipboard.writeText("+55 31 97337-2997")};
    alert("Texto Copiado");
}
    

