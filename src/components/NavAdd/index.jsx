import React, { useState } from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { InputText } from '../InputText';
import { SelectGenre } from '../SelectGenre';
import css, { Botao, Form, Nav } from './styles.js'
import { storageClient } from '../../storage/storageUsers';

// const clienteStorage = JSON.parse(localStorage.getItem('cliente')) || []
export function NavAdd({ setClients }) {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [genero, setGenero] = useState('')

    const objClient = {
        nome,
        descricao,
        genero
    }

    //ao submeter o formulario
    function handleAddClient(e) {
        e.preventDefault()

        setClients((state) => {
            return [...state, objClient]
        })
        
        storageClient(objClient)

        setNome('')
        setDescricao('')
        setGenero('')

    }

    // clienteStorage.push(objClient)
    // localStorage.setItem('cliente', JSON.stringify(clienteStorage))

    //   clienteStorage.forEach( (dados) => {
    //     localDados(dados)

    // })

    return (
        <Nav>
            <Form onSubmit={handleAddClient}>
                <div>
                    <InputText
                        placeholder='nome do cliente'
                        value={nome}
                        change={(value) => setNome(value)}
                        must={true}
                    />
                    <InputText
                        placeholder='descrição do cliente'
                        value={descricao}
                        change={(descricao) => setDescricao(descricao)}
                        must={false}
                    />
                    <SelectGenre
                        required={true}
                        value={genero}
                        change={(genero) => setGenero(genero)}

                    />

                    <Botao type="submit">Adicionar</Botao>
                </div>
            </Form>
        </Nav>
    )
}
