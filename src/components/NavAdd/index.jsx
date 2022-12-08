import React, { useState } from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { InputText } from '../InputText';
import { SelectGenre } from '../SelectGenre';

export function NavAdd ({dados}) {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [genero, setGenero] = useState('')

    const Submit = (e) => {
        e.preventDefault()
        dados({nome, descricao, genero})
    }

    return (
        <nav>
            <form onSubmit={Submit}>
                <InputText 
                    label='Nome'
                    value={nome}
                    change={(value) => setNome(value)}
                    must={true}
                />
                <InputText 
                    label='Descrição'
                    value={descricao}
                    change={(descricao) => setDescricao(descricao)}
                    must={true}
                />
                <SelectGenre 
                    value={genero}
                    change={(genero) => setGenero(genero)}
                />

                <button type="submit"><PersonAddAltIcon/></button>
            </form>
        </nav>
  )
}
