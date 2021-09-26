import React, { Component } from 'react';
import { Card } from 'primereact/card'
import { Galleria } from "primereact/galleria";
import '../css/styles.css'
import { stringify } from 'flatted'
import background from '../img/avante_logo.png'

export default class Top10 extends Component {
  osMelhores = [
    {
      ra: 77665588,
      nome: 'Jaqueline Silva Costa',
      avtCoins: 300,
      backgroundColor: '#FFD700',
    },
    {
      ra: 11223344,
      nome: 'João Silva',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    },
    {
      ra: 44778866,
      nome: 'Maria Mendes',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    },
    {
      ra: '00998877',
      nome: 'Diego Costa',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    }
    ,
    {
      ra: '66771188',
      nome: 'Antônio José',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    }
    ,
    {
      ra: '88776001',
      nome: 'Maria Cristina',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    }
    ,
    {
      ra: '77661100',
      nome: 'José Felipe',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    }
    ,
    {
      ra: '99000000',
      nome: 'Felipe Alves',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    }
    ,
    {
      ra: '11227766',
      nome: 'Meire Freitas',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    }
    ,
    {
      ra: '11662222',
      nome: 'Sandra Aparecida',
      avtCoins: 200,
      backgroundColor: '#C0C0C0',
    }
  ];

  itemTemplate = (item) => {
    return (
        <Card
          className={`w-full h-full border border-1 border-400`}>
          <div
            className={`flex flex-column align-items-center justify-content-center`}>
            <p className={`text-3xl h-full w-full text-center border-1 round border-300 shadow-4 py-3 mt-2`}>{item.posicao + 1}{`\u00B0 lugar`}</p>
            <p className={`text-4xl my-4`}>{item.aluno.nome}</p>
            <p className={``}>RA: {item.aluno.ra}</p>
            <p className={`text-5xl`}>AVTCOINS: {item.aluno.avtCoins}</p>
          </div>
        </Card>
    )
  }
  thumbnailTemplate = (item) => {
    // console.log('aqui: ' + stringify(item))
    //return this.itemTemplate(item, 0, 'w-full', 'h-full')
    return (
        <Card
          className={"mx-1 p-0 flex justify-content-center align-items-center"}>
          {
            item.aluno.nome.split(" ").filter((e, i) => i <= 0).map((palavra, i) =>
                <p
                   key={i}
                  className={"text-xs text-center w-4rem"}>
                  {palavra}
                </p>
            )
          }
        </Card>
    )
  }

  render(){
    return (
        <Galleria
          value={this.osMelhores.map ((e, i) => ({aluno: e, posicao: i}))}
          item={this.itemTemplate}
          thumbnail={this.thumbnailTemplate}
          numVisible={2}
          circular autoPlay transitionInterval={3000}
          thumbnailsPosition={'left'}
          className={"w-full h-full"}
        />
    );
  }
}


