import React, { Component } from 'react';
import { Carousel } from 'primereact/carousel';

export default class Top3 extends Component {
  osTresMelhores = [
    {
      ra: 77665588,
      nome: 'Jaqueline Silva',
      avtCoins: 300,
      backgroundColor: '#FFD700',
    },
    {
      ra: 33776655,
      nome: 'João Silva',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    },
    {
      ra: 99887766,
      nome: 'Maria Silva',
      avtCoins: 150,
      backgroundColor: ' #b08d57',
    },
    ,
    {
      ra: 99887766,
      nome: 'Maria Silva',
      avtCoins: 150,
      backgroundColor: ' #b08d57',
    },
    ,
    {
      ra: 99887766,
      nome: 'Maria Silva',
      avtCoins: 150,
      backgroundColor: ' #b08d57',
    },
    ,
    {
      ra: 99887766,
      nome: 'Maria Silva',
      avtCoins: 150,
      backgroundColor: ' #b08d57',
    },
    ,
    {
      ra: 99887766,
      nome: 'Maria Silva',
      avtCoins: 150,
      backgroundColor: ' #b08d57',
    },
  ];

  itemTemplate = (item) => {
    return (
      <div
        key={item.ra}
        className={`flex flex-column justify-content-center align-items-center shadow-8`}
      >
        <p className='text-2xl'>{item.nome}</p>
        <p>{item.avtCoins} AVTCoins!</p>
      </div>
    );
  };
  render() {
    return (
      <div>
        <Carousel
          value={this.osTresMelhores}
          itemTemplate={this.itemTemplate}
          circular
          autoplayInterval={3000}
          numVisible={3} 
          numScroll={1}
        />
      </div>
    );
  }
}
