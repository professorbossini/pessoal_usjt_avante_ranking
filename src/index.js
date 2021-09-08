import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import MyDock from './components/MyDock';
import Home from './components/Home'

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
    return (
      <div>
        <MyDock escolherComponente={this.escolherComponente} />
        <div className='grid justify-content-center mt-8'>
          <div className='col-8'>
            <Card title={this.state.titulo}>
                {this.state.componente}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
