import React, { Component } from 'react';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data...'
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({ data: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.data} onChange={(e) => this.updateState(e)} />
                
                <h4>{this.state.data}</h4>
            </div>

        )
    };
}

export default App;