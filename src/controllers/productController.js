const productService = require("../services/productService")

const getProducts = async (req, res, next) => {
    try {
        const user = req.header.user
        const productos = await productService.getProducts(user)

        res.json(productos)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getProducts