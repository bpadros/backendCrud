import {Router} from "express"
import productoCtrl from "../controllers/producto.controllers"

const router = Router()

//crear rutas
router.route("/").delete(productoCtrl.borrarProducto)

// app.get("/",(req,res)=>{
//     res.send("hola desde el servidor backend")



export default router