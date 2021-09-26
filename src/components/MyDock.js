import  { Dock } from 'primereact/dock'
import React, { Component } from 'react'
import podium from '../img/podium.svg'
import home from '../img/home.svg'
import myself from '../img/myself.svg'
import Home from './Home'
import Top10 from './Top10'
import Myself from './Myself'
export default class MyDock extends Component {
    
    homeComponent = <Home />
    top3Component = <Top10 />
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
                icon: () => <img alt="Top 10" src={podium}  className={styles.img} />,
                command: () => {this.props.escolherComponente(this.top3Component, 'Top 10')}
            },
            {
                label: 'Meu desempenho',
                icon: () => <img alt="Meu desempenho" src={myself}  className={styles.img} />,
                command: () => {this.props.escolherComponente(this.myselfComponent, 'Meu desempenho')}
            }
        ]
        return (
            <Dock className="p-dock" className="m-0" model={items} position="bottom"/>
        )
    }
}

const styles = {
    img: 'border-round'
}