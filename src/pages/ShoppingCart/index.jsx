import { useEffect, useState } from "react";
import {
    Ul
} from "./styles";
import LiProduct from "../../components/LiProduct";

import { AddProduct } from "../../components/AddProduct";
import { getProducts, removeProduct } from "../../storage/storageProduct";

export function ShoppingCart() {

    const [products, setProducts] = useState([])

    function fetchProducts() {
        const products = getProducts()
        setProducts(products)
        console.log('array alterado: ',products);
    }

    function handleDelete(id) {
            const products = getProducts()
            const productRemove = products.filter(product => product.id !== id)

            setProducts(productRemove)
            removeProduct(id)
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
