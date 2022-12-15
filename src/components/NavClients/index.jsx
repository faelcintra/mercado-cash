import React, { useEffect, useState } from 'react'
import { LiClient } from '../LiClient'
import { NavAdd } from '../NavAdd'
import imgWoman from './woman.png'
import imgMan from './man.png'
import css, { Section, Ul } from './styles.js'
import { getAllClients } from '../../storage/storageUsers'


export function NavClients() {
    
    const [clientes, setClientes] = useState([])

    function fetchClients () {
        const clients = getAllClients()
        setClientes(clients)
        console.log('buscado');
    }

    useEffect(() => {
        fetchClients()


    }, [] )
    
    return (
        <Section>
            <NavAdd setClients={setClientes} />
                {/* // localDados={(dados) => newCLient(dados)}
                // dados = {(info) => infoLocal(info)} */}
            <Ul>
                {clientes.map((cliente) => (
                    <LiClient key={cliente.nome}
                        nome={cliente.nome}
                        descricao={cliente.descricao}
                        genero={cliente.genero == 'feminino' ? imgWoman : imgMan}
                    />
                ))}
            </Ul>
            {/* <button onClick={fetchClients}>buscar</button> */}
        </Section>
    )
}
