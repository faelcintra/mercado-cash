const clientKey = 'clients'

export function getAllClients() {
    const storage = localStorage.getItem(clientKey)
    const clients = storage ? JSON.parse(storage) : []

    return clients
}

export function addClient(client) {
    const storage = getAllClients()

    const newStorage = JSON.stringify([...storage, client])
    
    localStorage.setItem(clientKey, newStorage)
}

export function removeClient(id) {
    const storage = getAllClients()

    const newStorage = storage.filter(client => client.id != id)
    
    const newStorageAsString = JSON.stringify(newStorage)

    localStorage.setItem(clientKey, newStorageAsString)
}

