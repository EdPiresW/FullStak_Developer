import React, { Component } from 'react';


class recuperarPalavraPasse extends Component {
    
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
                        <div className="alert alert-primary text-justify">
                            <strong>Importante!</strong> Introduza o email para receber as instruções de recuperação de Palavra-Chave
                        </div>
                        <form action="" id="emailCheck" name="emailCheck">
                            <div className="form-group">
                                <label htmlFor="msgNovaPass">{this.props.c}:</label>
                                <input type="email" className="form-control" placeholder={this.props.c + ("...")} id="msgNovaPass" required />
                            </div>
                            <button type="submit" id="submeterMsgRecup" className="btn btn-primary btn-block">Submeter</button>
                        </form>
                        <button id="voltar" style={{ marginTop: 8 }} type="button" className="btn btn-primary btn-block">Voltar</button>
                    </div>
                </div>
            </div>
            
        );
       
    }
}

export default recuperarPalavraPasse;