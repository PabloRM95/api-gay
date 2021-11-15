const router = require('express').Router();
const controller = require('./todo.controller');

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.post("/", controller.createOne)
router.delete("/:id", controller.deleteOne)
router.patch("/:id", controller.modifyOne)

module.exports = router;