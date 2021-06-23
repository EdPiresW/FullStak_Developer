function lerDadosDoServidor(endereco,funcaodestino){
    var ficheiro;
    var resposta;

    ficheiro=new XMLHttpRequest();
    ficheiro.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            resposta=this.responseText;
            funcaodestino(JSON.parse(resposta));
        }
    }
    ficheiro.open("GET", endereco, true);
    ficheiro.send();
}