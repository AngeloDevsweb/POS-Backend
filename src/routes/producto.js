const {Router}= require('express')
const router = Router();

const {
  getProducto,
  getProductos,
  createProducto,
  deleteProducto,
  updateProducto,
} = require("../controllers/producto.controller");


router.route('/')
    .get(getProductos)
    .post(createProducto)

router.route('/:id')
    .get(getProducto)
    .delete(deleteProducto)
    .put(updateProducto)

module.exports = router;