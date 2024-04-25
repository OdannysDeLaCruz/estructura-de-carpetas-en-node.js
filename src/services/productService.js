const productRepository = require("../repositories/productRepository")

const getProducts = async (user) => {
    if ( user === 'Admin' ) {
        const productos = await productRepository.getProducts()

        return productos
    }

    return []
}

module.exports = {
    getProducts
}