const productoCtrl = {}

const Producto = require('../models/Producto')

productoCtrl.getProductos = async(req, res) =>{
    const productos = await Producto.find();
    res.json(productos)
} 

productoCtrl.createProducto = async(req, res)=>{
    const {nombre, vram, marca, precio, stock} = req.body;
    const newProducto = new Producto({
        nombre,
        vram,
        precio,
        marca,
        stock
    })
    await newProducto.save()
    res.json({message: 'el producto ha sido creado'})
}

productoCtrl.getProducto = async(req, res)=>{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoCtrl.deleteProducto = async(req,res)=>{
    await Producto.findByIdAndDelete(req.params.id)
    res.json({message: 'producto eliminado'})
}

productoCtrl.updateProducto = async(req, res)=>{
    const {nombre, vram, marca, precio, stock} = req.body;
    await Producto.findByIdAndUpdate(req.params.id, {
        nombre,
        vram,
        precio,
        marca,
        stock
    })
    res.json({message:'producto actualizado'})
}

module.exports = productoCtrl;