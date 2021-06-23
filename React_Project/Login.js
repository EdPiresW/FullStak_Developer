import React, { Component } from 'react';

class Login extends Component {
    render() {

        return (
            <div id="box" className="box">
                <div id="logo" className="logo">
                    <img src="img/sweet.png" className="rounded-circle" alt="sweet" width="100px" />
                </div><br />
                <div className="caixa">
                <button id="close" type="button" className="close">&times;</button>
                    <div className="caixa2">
                        <h3 className="text-center">Iniciar Sessão</h3>
                        <form id="loginform">
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="email">{this.props.a}:</label>
                                    <input type="email" className="form-control" placeholder={this.props.a + ("...")} id="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">{this.props.b}:</label>
                                    <input type="password" className="form-control" placeholder={this.props.b + ("...")} id="pwd" required />
                                </div>
                                <div className="form-group form-check">
                                    <label htmlFor="form-check-label"></label>
                                    <input className="form-check-input" type="checkbox" /> <span>Relembrar</span>

                                </div>
                                <div>
                                    <p className=" text-right">Esqueceu-se da palavra-chave? <span className="recover">Recuperar</span></p>
                                </div>
                                <button type="submit" id="loginSubmeter" className="btn btn-primary btn-block">Submeter</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;