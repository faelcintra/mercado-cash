import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import { InputText } from '../InputText';
import { SelectGenre } from '../SelectGenre';
import { Button, Form, Nav } from './styles.js'
import { addClient, getAllClients } from '../../storage/storageUsers';


export function NavAdd({ setClients }) {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    
    const randomId = () => uuidv4() 
    const objClient = {
        name,
        description,
        genre
    }

    function handleAddClient(e) {
        e.preventDefault()
        checkClient()

        setName('')
        setDescription('')
        setGenre('')
    }

    function checkClient() {
        const clients = getAllClients()
        const clientFind = clients.find(client => client.name === objClient.name)
        console.log('array encontrado: ', clientFind);

        if (clientFind) {
            objClient.id = randomId()
        } else {
            objClient.id = randomId()
            addClient(objClient)
            setClients((state) => {
                return [...state, objClient]
            })
        }
    }

    return (
        <Nav>
            <Form onSubmit={handleAddClient}>
                <div>
                    <InputText
                        placeholder='nome do cliente'
                        value={name}
                        change={(value) => setName(value)}
                        must={true}
                    />
                    <InputText
                        placeholder='descrição do cliente'
                        value={description}
                        change={(value) => setDescription(value)}
                        must={false}
                    />
                    <SelectGenre
                        required={true}
                        value={genre}
                        change={(value) => setGenre(value)}
                    />

                    <Button type="submit">Adicionar</Button>
                </div>
            </Form>
        </Nav>
    )
}

