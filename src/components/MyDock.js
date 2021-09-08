import  { Dock } from 'primereact/dock'
import React, { Component } from 'react'
import podium from '../img/podium.svg'
import home from '../img/home.svg'
import myself from '../img/myself.svg'
import Home from './Home'
import Top3 from './Top3'
import Myself from './Myself'
export default class MyDock extends Component {
    
    homeComponent = <Home />
    top3Component = <Top3 />
    myselfComponent = <Myself />
    
    render() {
        const items = [
            {
                label: 'Home',
                icon: () => <img alt="Home" src={home} className={`${styles.img}`} />,
                command: () => {this.props.escolherComponente(this.homeComponent, 'Home')}
            },
            {
                label: 'Top 3',
                icon: () => <img alt="Top 3" src={podium}  className={styles.img} />,
                command: () => {this.props.escolherComponente(this.top3Component, 'Top 3')}
            },
            {
                label: 'Meu desempenho',
                icon: () => <img alt="Meu desempenho" src={myself}  className={styles.img} />,
                command: () => {this.props.escolherComponente(this.myselfComponent, 'Meu desempenho')}
            }
        ]
        return (
            <Dock className="p-dock" model={items} position="bottom"/>
        )
    }
}

const styles = {
    img: 'border-round'
}