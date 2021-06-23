import React, { Component } from 'react';

class msgValidacao extends Component {
    render() {

        return (
            <div>
                <div id="logo1" className="logo1">
                    <a id="logo1">
                        <img src="img/sweet.png" className="rounded-circle" alt="sweet" width="100px" />
                    </a>
                </div>
                <div id="tableBox" className="container tableBox">
                    <h3 className="text-center text-dark">Base de Dados</h3>
                    <table id="lista" className="table table-striped table-hover lista">
                        <tbody>
                            <tr>
                                <th>Foto</th>
                                <th>Numero de Cliente</th>
                                <th>Nome</th>
                                <th>NIF</th>
                                <th><button id="button1" className="btn btn-success">Add Cliente</button></th>
                            </tr>
                            <tr id="1">
                                <td>foto</td>
                                <td className="numero_cliente">1</td>
                                <td>Rui</td>
                                <td>1234567</td>
                                <td><button type="button" id="info_button" className="info_button" value="1">Info</button>
                                    <button type="button" id="info_button" className="info_button" value="1">Info</button>
                                    <button type="button" id="info_button" className="info_button" value="1">Info</button></td>
                            </tr>
                            <tr id="2">
                                <td>foto</td>
                                <td className="numero_cliente">2</td>
                                <td>Ana</td>
                                <td>2345678</td>
                                <td><button type="button" id="info_button" className="info_button" value="2">Info</button></td>
                            </tr>
                            <tr id="3">
                                <td>foto</td>
                                <td className="numero_cliente">3</td>
                                <td>Ricardo</td>
                                <td>3456789</td>
                                <td><button type="button" id="info_button" className="info_button" value="3">Info</button></td>
                            </tr>
                            <tr id="4">
                                <td>foto</td>
                                <td className="numero_cliente">4</td>
                                <td>Patricia</td>
                                <td>4567891</td>
                                <td><button type="button" id="info_button" className="info_button" value="4">Info</button></td>
                            </tr>
                            <tr id="5">
                                <td>foto</td>
                                <td className="numero_cliente">5</td>
                                <td>Rita</td>
                                <td>5678912</td>
                                <td><button type="button" id="info_button" className="info_button" value="5">Info</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default msgValidacao;