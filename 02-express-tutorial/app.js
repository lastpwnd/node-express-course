const express = require("express")
const path = require("path")
const app = express()
const data = require("./data")

app.use(express.static("./public"))

app.get("/api/v1/test", (req, res) => {
    res.json({ message: "It worked!" })
})

app.get("/api/v1/products", (req, res) => {
    const newProducts = data.products.map((product) => {
        const {id, name, image, price} = product
        return {id, name, image, price}
    }) 
    res.json(newProducts)
})

app.get("/api/v1/people", (req, res) => {
    const people = data.people
    res.json(people)
})

app.get("/api/v1/products/:productID", (req, res) => {
    const {productID} = req.params
    const singleProduct = data.products.find(product => product.id === parseInt(productID))
    if (!singleProduct) {
        return res.status(404).json({ message: "Oops! That product was not found..." })
    }
    res.json(singleProduct)
})

app.get("/api/v1/query", (req, res) => {
    const {search, limit, priceMax} = req.query
    let sortedProducts = [...data.products]

    if (search) { //search by expression
        sortedProducts = sortedProducts.filter( (product) => {
            return product.name.includes(search)
        })
    }
    if (limit) { //search by limit
        sortedProducts = sortedProducts.slice(0, parseInt(limit))
    }
    if (priceMax) //search by Max Price
    {   
        sortedProducts = sortedProducts.filter( (product) => {
            return product.price <= parseFloat(priceMax)
        })
    }

    res.status(200).json(sortedProducts)
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3000, () => {
    console.log("Server is up on port 3000...")
})