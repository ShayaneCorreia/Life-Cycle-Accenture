import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        click: 'ainda não clicou'
    }
    componentDidMount() {
        console.log('[App] - Apareceu')
    }
    handleClick() {
        this.setState({
            click: 'clicou'
        })
    }

    render() {
        console.log('[App] - Renderizou')
        return ( <
            div >
            Olá, { this.props.name }, você { this.state.click }. <
            button onClick = { this.handleClick.bind(this) } > Click < /button> <
            /div>
        )
    }
}

ReactDOM.render( <
    React.StrictMode >
    <
    App name = { "Shayane Correia" }
    /> <
    /React.StrictMode>,
    document.getElementById('root')
);