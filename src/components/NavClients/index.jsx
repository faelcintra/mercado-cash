import { useEffect, useState } from 'react'

import { LiClient } from '../LiClient'
import { NavAdd } from '../NavAdd'
import { Section, Ul } from './styles.js'
import { getAllClients, removeClient } from '../../storage/storageClient'

export function NavClients() {

    const [clients, setClients] = useState([])

    function fetchClients() {
        const clients = getAllClients()
        setClients(clients)
        console.log(clients);
    }  

    function handleDelete(id) {
        const clientRemove = clients.filter(client => client.id !== id)
        setClients(clientRemove)

        console.log(clients);

        removeClient(id)
    }

    useEffect(() => {
        fetchClients()
    }, [setClients])

    return (
        <Section>
            <NavAdd setClients={setClients} />
            <Ul>
                {clients.map((client) => (
                    <LiClient
                        key={client.id}
                        client={client}
                        handleDelete={handleDelete}
                    />
                ))}
            </Ul>
        </Section>
    )
}
