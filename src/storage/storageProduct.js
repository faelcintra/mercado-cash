const productKey = 'products'

export function getProducts() {

    const local = localStorage.getItem(productKey)
    const products = local ? JSON.parse(local) : []

    console.log(products);
    return products

}

export function postProducts(products) {
    const localObj = getProducts()

    const newLocal = JSON.stringify([...localObj, products])

    localStorage.setItem(productKey, newLocal)
}

export function removeProduct(id) {
    const local = getProducts()

    const newLocal = local.filter(product => product.id !== id)

    const newLocalAsString = JSON.stringify(newLocal)

    localStorage.setItem(productKey, newLocalAsString)
}