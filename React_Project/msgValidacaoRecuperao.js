import React, { Component } from 'react';

class msgValidacaoRecuperao extends Component {
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
                        <div className="alert alert-success">A sua Palavra-Chave foi alterada com <strong>Sucesso!</strong>
                        </div><br /><br /><br /><br />
                        <button type="button" className="btn btn-primary btn-block">Entrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default msgValidacaoRecuperao;