const ClientKey = 'clientes'

export function getAllClients() {
    const storage = localStorage.getItem(ClientKey)
    const clients = storage ? JSON.parse(storage) : []

    return clients
}

export function storageClient(client) {
    const storage = getAllClients()

    const newStorage = JSON.stringify([...storage, client])

    localStorage.setItem(ClientKey, newStorage)
}

