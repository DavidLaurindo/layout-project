const router = require("express").Router()

const productController = require("../controllers/productController")

router.route("/").get((req, res) => {
  console.log("entrei no get do produto")
  productController.getAll(req, res)
})

module.exports = router
