const router = require("express").Router()

const serviceController = require("../controllers/serviceController")

router.route("/").post((req, res) => serviceController.create(req, res))

router.route("/").get((req, res) => serviceController.getAll(req, res))

router.route("/:id").get((req, res) => serviceController.get(req, res))

router.route("/:id").delete((req, res) => serviceController.delete(req, res))

router.route("/:id").put((req, res) => serviceController.update(req, res))

module.exports = router
