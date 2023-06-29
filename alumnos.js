import express from "express";
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

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


