import Producto from "../models/producto"

const productoCtrl = {}

//logica para obtener la lista de productos
productoCtrl.listarProductos = (req,res)=>{
    res.send("listar productos")
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

export default productoCtrl