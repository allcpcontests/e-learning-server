 import express  from "express";

 import {config} from "dotenv";
 import ErrorMiddleware from "./middlewares/Error.js";
 import cookieParser from "cookie-parser";

config({
    path:"./config/config.env",
});
const app = express();

//uaing middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

app.use(cookieParser());

//importing and using routes
import course from "./routes/courseRoutes.js"
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";
import other from "./routes/otherRoutes.js";



app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);



export default app;

app.get("/",(req,res)=>res.send(`<h1>site  is working click here<a href=${process.env.FRONTEND_URL}>here</a> to visit frontend</h1>`));

app.use(ErrorMiddleware);