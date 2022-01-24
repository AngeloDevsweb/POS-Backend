const {Router}= require('express')
const router = Router()

const {
  getIngreso,
  getIngresos,
  createIngreso,
  deleteIngreso,
  updateIngreso,
} = require("../controllers/ingreso.controller");

router.route('/')
    .get(getIngresos)
    .post(createIngreso)

router.route('/:id')
    .get(getIngreso)
    .delete(deleteIngreso)
    .put(updateIngreso)

module.exports = router;