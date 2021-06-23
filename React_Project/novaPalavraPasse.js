import React, { Component } from 'react';

class novaPalavraPasse extends Component {
    render() {

        return (
            <div id="box" className="box">
                <div id="logo" className="logo">
                    <img src="img/sweet.png" className="rounded-circle" alt="sweet" width="100px" />
                </div><br />
                <div className="caixa">
                    <button id="close" type="button" className="close">&times;</button>
                    <div className="caixa2">
                        <h5 className="text-center">Recuperação da Palavra-Chave</h5><br />
                        <div id="erropass" className="alert alert-danger text-justify alert-dismissible">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Erro!</strong> Verifique se introduziu a Palavra-Chave ou se são iguais
                        </div>
                        <form action="" id="tablaNovaPass">
                            <div className="form-group">
                                <label htmlFor="novaPass">{this.props.d}:</label>
                                <input type="password" className="form-control" placeholder={this.props.d + ("...")} id="novaPass" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="repitaPass">{this.props.e}:</label>
                                <input type="password" className="form-control" placeholder={this.props.e + ("...")} id="repitaPass" required />
                            </div>
                            <button type="submit" id="submeter" className="btn btn-primary btn-block">Submeter</button>
                            <button type="button" id="voltar" className="btn btn-primary btn-block">Voltar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default novaPalavraPasse;