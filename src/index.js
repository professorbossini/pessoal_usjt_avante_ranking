import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import MyDock from './components/MyDock';
import Home from './components/Home'

import './css/styles.css'

import background from './img/avante_logo.png'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        componente: <Home />,
        titulo: 'Home'
    };
  }
  escolherComponente = (componente, titulo) => {
    this.setState({
        componente: componente,
        titulo: titulo
    })
  }
  render() {
    const cardHeader = (
        <img src={background} className={'h-12rem md:h-10rem lg:h-18rem border-round'} />
    )
    return (
        <div className='grid justify-content-center h-screen m-0 bg-blue-500'>

            <div className='md:col-10 h-full lg:col-8 xl:col-6'>
                <Card
                    id="cartao-principal"
                    title={this.state.titulo}
                    header={cardHeader}
                    className={"bg-blue-50 p-3 m-0"}
                    >
                        {this.state.componente}
                </Card>
            </div>
            <MyDock escolherComponente={this.escolherComponente} />
        </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
