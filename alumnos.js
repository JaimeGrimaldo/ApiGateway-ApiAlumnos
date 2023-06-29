import express from "express";
let app = express();

app.get("/alumno", (req, res,next) => {
    res.send([
        "Jaime Grimaldo",
        "Mauricio Matuz",
        "Ana Navarro"
    ])
});

app.post("/alumnoPost/:nombre",(req, res,next) => {
    try {
        const nombre = req.params.nombre;
        return res.json({
            alumno:nombre
        })
    } catch (error) {
        console.log("Esto fallo: ", error)
    }

})

app.listen(3001,()=>{
    console.log("> Api de alumnos funcionando.")
});