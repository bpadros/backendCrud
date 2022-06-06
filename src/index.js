import express from "express"
import morgan from "morgan"
import cors from "cors"
//creo una instancia de express
const app = express()
// crear un puerto para el servidor

app.set("port", process.env.PORT || 4000)

app.listen(app.get("port"),()=>{
    console.log("estoy en el puerto "+ app.get("port"))
})

//middlewares o configuraciones extras
app.use(morgan("dev")) //da informacion extra a la terminal
app.use(cors()) //permite recibir peticiones remotas
//permite recibir objetos en formato json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//crear rutas 
app.get("/",(req,res)=>{
res.send("hola desde el servidor backend")
})
app.delete("/borrardatos",(req,res)=>{
    res.send("aqui vamos a borrar")
    })