const productos = [
    {
        name: 'Producto 1',
        price: 1000,
        stock: 30,
        category: "Maquillaje"
    },
    {
        name: 'Producto 2',
        price: 1000,
        stock: 30,
        category: "Maquillaje"
    },
    {
        name: 'Producto 3',
        price: 1000,
        stock: 30,
        category: "Maquillaje"
    }
]

const getProducts = async () => {
    return productos
}

module.exports = {
    getProducts
}