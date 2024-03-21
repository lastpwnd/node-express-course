const express = require("express")
const app = express()
const people = require("./routes/people")
const auth = require("./routes/auth")
const cookieParser = require("cookie-parser")

app.use(express.static("./methods-public"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())
app.use("/api/people", people)
app.use("/login", auth)

// //additional assignment

const authentificate = (req, res, next) => {
    const {name} = req.cookies
    if (name) {
        req.user = name
        next()
    } else {
        return res.status(401).json({status:"unauthorized"})
    }
}

app.post("/logon", (req, res) => {
   const {name} = req.body
   console.log(name)
   if (name) {
        res.cookie("name", name)
        return res.status(201).send(`Hello, ${name}`)
   } else {
    return res.status(400).json({msg:"login error"})
   }
})

app.delete("/logoff", (req, res) => {
    res.clearCookie("name")
    return res.status(200).json({status: "logged off"})
})

app.get("/test", authentificate, (req, res) => {
    return res.status(200).json({status: "authorized", name: req.user})
})

// //end of additional assignment

// const logger = (req, res, next) => {
//     const method = req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     next()
// }

//app.use(["/api/v1/people", "/api/v1/test"], logger) //it works



// app.get("/api/v1/test", (req, res) => {
//     res.json({ message: "It worked!" })
// })

// app.get("/api/v1/products", (req, res) => {
//     const newProducts = products.map((product) => {
//         const {id, name, image, price} = product
//         return {id, name, image, price}
//     }) 
//     res.json(newProducts)
// })

// app.get("/api/v1/people", (req, res) => {
//     res.status(200).json({data:people})
// })



// app.post("/api/v1/people?query", (req, res) => {
//     if (!req.body.name) {
//         res.status(400).json({ success: false, message: "Please provide a name" })
//     }
//         else {
//             people.push({ id: people.length + 1, name: req.body.name })
//             res.status(201).json({ success: true, name: req.body.name })
//         }
// })

// app.get("/api/v1/products/:productID", (req, res) => {
//     const {productID} = req.params
//     const singleProduct = data.products.find(product => product.id === parseInt(productID))
//     if (!singleProduct) {
//         return res.status(404).json({ message: "Oops! That product was not found..." })
//     }
//     res.json(singleProduct)
// })

// app.get("/api/v1/query", (req, res) => {
//     const {search, limit, priceMax} = req.query
//     let sortedProducts = [...data.products]

//     if (search) { //search by expression
//         sortedProducts = sortedProducts.filter( (product) => {
//             return product.name.includes(search)
//         })
//     }
//     if (limit) { //search by limit
//         sortedProducts = sortedProducts.slice(0, parseInt(limit))
//     }
//     if (priceMax) //search by Max Price
//     {   
//         sortedProducts = sortedProducts.filter( (product) => {
//             return product.price <= parseFloat(priceMax)
//         })
//     }

//     res.status(200).json(sortedProducts)
// })

app.all("*", (req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3000, () => {
    console.log("Server is up on port 3000...")
})