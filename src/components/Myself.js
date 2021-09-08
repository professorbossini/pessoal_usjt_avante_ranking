import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext';
export default class Myself extends Component {
    state = {alunos: []}
    componentDidMount(){
        const alunos = [
            {ra: 99887766, nome: 'Maria Silva', avtCoins: 150},
            {ra: 33776655, nome: 'João Silva', avtCoins: 200},
            {ra: 11009988, nome: 'Pedro Silva', avtCoins: 120},
            {ra: 77665588, nome: 'Jaqueline Silva', avtCoins: 300},

        ]
        this.setState({alunos: alunos})
    }
    render() {
        return (
            <div>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="campoBusca">Digite seu RA</label>
                    <InputText id="campoBusca" type="text" />
                </div>
                <Button className="mt-2" label="OK"/>
            </div>
            <DataTable value={this.state.alunos} stripedRows>
                <Column field="ra" header="RA"/>
                <Column field="nome" header="Nome"/>
                <Column field="avtCoins" header="AVTCoins"/>
            </DataTable>
            </div>
        )
    }
}
