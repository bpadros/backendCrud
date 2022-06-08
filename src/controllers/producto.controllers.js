import Producto from "../models/producto"

const productoCtrl = {}

//logica para obtener la lista de productos
productoCtrl.listarProductos = async(req,res)=>{
    try {
      //quiero crear un arreglo con todos los productos
      const listaProductos = await Producto.find()
      res.status(200).json(listaProductos)
    } catch (error) {
        console.log(error)
        res.status(404).json({ mensaje:"no se pudo obtener el listado de productos"})
    }
}

productoCtrl.borrarProducto = (req,res)=>{
    res.send("aqui borro los productos")
}

productoCtrl.crearProducto = async(req,res)=>{
       // console.log(req.body)
    try {
        //validar 
        //crear un nuevo objeto para guardar en la BD
        const productoNuevo = new Producto({
            nombreProducto:  req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        })
        //guardar producto en BD
        await productoNuevo.save()
        //enviar la respuesta
        res.status(201).json({
        mensaje: "producto agregado correctamente"
    })
    } catch (error) {
        console.log(error)
        //enviar codigo de error
        res.status(400).json({
            mensaje:"error al agregar un producto"
        })
    }
}

productoCtrl.obtenerProducto = async(req,res)=>{
    try {
        //obtener el parametro de la ruta
       console.log(req.params.id)
        //creo el objeto y los busco en la BD
        const productoBuscado = await Producto.findById(req.params.id)
        res.status(200).json(productoBuscado)
    } catch (error) {
        console.log(error)
        res.status(404).json({ mensaje:"no se pudo obtener el producto solicitado"})
    }

}

export default productoCtrl