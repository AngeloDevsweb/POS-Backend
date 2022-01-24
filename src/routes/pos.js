const {Router} = require('express')
const router = Router()

const {getPos, getPosOne, createPos, deletePos, updatePos} = require('../controllers/pos.controller')

router.route('/')
    .get(getPos)
    .post(createPos)

router.route('/:id')
    .get(getPosOne)
    .delete(deletePos)
    .put(updatePos)

module.exports = router;