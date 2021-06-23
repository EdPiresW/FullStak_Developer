function preencherInputs(resposta){
    document.getElementById("nome").value=resposta.Nome;
    document.getElementById("morada").value=resposta.Morada;
    document.getElementById("cpostal").value=resposta.CPostal;
    document.getElementById("telefone").value=resposta.Telefone;
    document.getElementById("email").value=resposta.EMail;
}

function carregarTabelaClientes(resposta){
    var linhasdatabela="<tr><td>Nome</td><td>NIF</td><td>Morada</td><td>C.Postal</td><td>Telefone</td><td>e-mail</td></tr>";
    
 
    

    resposta.forEach(linha => {
        linhasdatabela+="<tr><td>"+linha.Nome+"</td><td>"+linha.NIF+"</td><td>"+linha.Morada+"</td><td>"+linha.CPostal+"</td><td>"+linha.Telefone+"</td><td>"+linha.EMail+"</td></tr>";
    });

   

/*
    for(linha=0;linha<=5;linha++){
        linhasdatabela+="<tr><td>"+resposta[linha].Nome+"</td><td>"+resposta[linha].NIF+"</td><td>"+resposta[linha].Morada+"</td><td>"+resposta[linha].CPostal+"</td><td>"+resposta[linha].Telefone+"</td><td>"+resposta[linha].EMail+"</td></tr>";
    }
*/
    document.getElementById("TabelaClientes").innerHTML=linhasdatabela;
}

