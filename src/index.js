import express from "express"
//creo una instancia de express
const app = express()
// crear un puerto para el servidor
app.set("port", process.env.PORT || 4000)

app.listen(app.get("port"),()=>{
    console.log("estoy en el puerto "+ app.get("port"))
})

console.log("prueba")