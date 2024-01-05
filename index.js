import express, { json } from "express";
import routesUser from "./routes/userRoutes.js"

const app = express();
app.use(json())
const port = 3000;


app.get("/", (req, res) => {
    res.status(200).send("hello world");
})

app.use(routesUser)


app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})