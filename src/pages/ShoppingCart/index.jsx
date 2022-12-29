import { useEffect, useState } from "react";
import {
    Ul
} from "./styles";
import LiProduct from "../../components/LiProduct";

import { AddProduct } from "../../components/AddProduct";
import { getProducts, getProductsByClientId, removeProduct } from "../../storage/storageProduct";
import { useParams } from "react-router-dom";

export function ShoppingCart() {

    const [products, setProducts] = useState([])

    const {idClient} = useParams()

    function fetchProducts() {
        const products = getProductsByClientId(idClient)
        setProducts(products)
        console.log('array alterado: ',products);
    }

    function handleDelete(idd) {
            const products = getProductsByClientId(idClient)
            const productRemove = products.filter(product => product.id !== idd)

            setProducts(productRemove)
            removeProduct(idd)
    }

    useEffect(() => {
        fetchProducts()
    }, [setProducts])

    return (
        <div>
            <AddProduct setProducts={setProducts} />
            <Ul>
                {products.map((product) => (
                    <LiProduct
                        handleDelete={handleDelete}
                        key={product.id}
                        product={product}
                    />
                ))}
            </Ul>

        </div>
    )
}
