import React, { useState } from 'react'
import { LiClient } from '../LiClient'
import { NavAdd } from '../NavAdd'
import imgWoman from './woman.png'
import imgMan from './man.png'

export function NavClients() {

    const [clientes, setClientes] = useState([])
    const newCLient = (cliente) => {
        setClientes([...clientes, cliente])
        
        console.log(cliente);
    }

  return (
    <section>
        <NavAdd dados={(info) => newCLient(info) }/>
        <ul>
            {clientes.map((cliente) => (
                <LiClient key={cliente.nome} 
                    nome={cliente.nome}
                    descricao={cliente.descricao}
                    genero={cliente.genero == 'feminino' ? imgWoman : imgMan}
                />
            ))}
        </ul>
    </section>
  )
}
