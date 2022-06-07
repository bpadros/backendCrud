const productoCtrl = {}

//logica para obtener la lista de productos
productoCtrl.listarProductos = (req,res)=>{
    res.send("listar productos")
}

productoCtrl.borrarProducto = (req,res)=>{
    res.send("aqui borro los productos")
}

export default productoCtrl