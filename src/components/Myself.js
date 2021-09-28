import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext';
import studentService from '../service/student.service';
export default class Myself extends Component {

    getMySelfAmongOthers = () => {
        studentService.getMySelfAmongOthers(this.state.ra, (result) => {
            this.setState({alunos: result.data, dialogoVisivel: true})
        })
    }
    state = {
        alunos: [],
        ra: '',
        dialogoVisivel: false
    }
    componentDidMount(){
        // const alunos = [
        //     {ra: 99887766, nome: 'Maria Silva', avtCoins: 150},
        //     {ra: 33776655, nome: 'João Silva', avtCoins: 200},
        //     {ra: 11009988, nome: 'Pedro Silva', avtCoins: 120},
        //     {ra: 77665588, nome: 'Jaqueline Silva', avtCoins: 300},

        // ]
        
    }
    render() {
        return (
            <div>
            <div className="p-fluid">
                <div className="p-field">
                    <label id="label-digite-ra" htmlFor="campoBusca">Digite seu RA</label>
                    <InputText 
                        id="campoBusca" 
                        type="text" 
                        value={this.state.ra}
                        onChange={(event) => this.setState({ra: event.target.value})}    
                    />
                </div>
                <Button onClick={this.getMySelfAmongOthers} className="mt-2" label="OK"/>
            </div>
            <Dialog visible={this.state.dialogoVisivel} style={{width: '50vw'}} breakpoints={{'960px': '75vw', '640px': '100vw'}} onHide={() => this.setState({dialogoVisivel: false})}>
                <DataTable value={this.state.alunos} stripedRows>
                    <Column field="posicao" header="Posição"/>
                    {/* <Column field="ra" header="RA"/> */}
                    <Column field="nome" header="Nome"/>
                    <Column field="avtCoins" header="AVTCoins"/>
                </DataTable>
            </Dialog>
            </div>
        )
    }
}
