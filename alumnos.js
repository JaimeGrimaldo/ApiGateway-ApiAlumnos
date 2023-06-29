import express from "express";
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/alumno", (req, res,next) => {
    res.send([
        "Jaime Grimaldo",
        "Mauricio Matuz",
        "Ana Navarro"
    ])
});

app.post("/alumnoPost",(req, res,next) => {
    try {
        const {nombre} = req.body;
        console.log("Esto tiene reqbody: ",req.body)
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