const router = require("express").Router()

//Services router

const servicesRouter = require("./servicesRouter")
const productsRouter = require("./productsRouter")

router.use("/service", servicesRouter)
router.use("/products", productsRouter)

module.exports = router
