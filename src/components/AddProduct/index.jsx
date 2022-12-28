import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";

import { getAllClients } from '../../storage/storageClient'
import { getProducts, postProducts } from '../../storage/storageProduct';
import { Card, CardClient, Info, InputAdd } from './styles'
import imgMan from '../../assets/man.png'
import imgWoman from '../../assets/woman.png'


export function AddProduct({ setProducts }) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { id } = useParams()

    const clients = getAllClients()
    const getIdClient = clients.find(client => client.id === id)

    const objProduct = {
        name,
        amount
    }

    function handleAddProduct(e) {
        e.preventDefault()
        checkProducts(objProduct)

        setName('')
        setAmount('')
    }

    function checkProducts(obj) {
        const products = getProducts()
        const findProduct = products.find(product => product.name === obj.name)

        if (findProduct) {
            obj.id = uuidv4()
        } else {
            obj.id = uuidv4()
            postProducts(objProduct)
            setProducts((products) => {
                return [...products, objProduct]
            })
        }

    }

    return (
        <Card onSubmit={handleAddProduct}>
            <CardClient>
                <Info>
                    <img src={objProduct.genre === 'feminino' ? imgWoman : imgMan} alt="" />
                    <div>
                        <h1>{getIdClient.name}</h1>
                        <span>{getIdClient.description}</span>
                    </div>
                </Info>

                <InputAdd>
                    <input
                        onChange={(value) => setName(value.target.value)}
                        value={name}
                        type="text"
                        required={true}
                        placeholder="digite o produto"
                    />
                    <input
                        onChange={(value) => setAmount(value.target.value)}
                        value={amount}
                        type="text"
                        required={true}
                        placeholder="quantidade"
                    />
                    <button>Adicionar ao carrinho</button>
                </InputAdd>
            </CardClient>
        </Card>
    )
}
