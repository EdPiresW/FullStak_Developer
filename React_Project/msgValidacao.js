import React, { Component } from 'react';

class msgValidacao extends Component {
    render() {

        return (
            <div id="box" className="box">
                <div id="logo" className="logo">
                    <img src="img/sweet.png" className="rounded-circle" alt="sweet" width="100px" />
                </div><br />
                <div className="caixa">
                    <button id="close" type="button" className="close">&times;</button>
                    <div className="caixa2">
                        <h5 className="text-center">Recuperação da Palavra-Chave</h5><br /><br />
                        <div className="alert alert-success text-justify">
                            <strong>Sucesso!</strong> Enviamos para o seu E-mail uma mensagem com as instruções de recuperação da Palavra-Chave
                </div><br /><br /><br />
                        <button type="button" className="btn btn-primary btn-block">Entrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default msgValidacao;






