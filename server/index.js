// env variable
require("dotenv").config();


import express from "express";
import cors from "cors";
import helmet from "helmet";
import Auth from "../server/Api/Auth"

//DataBase Cnnection
import connectDB from "./Schema/connections"

const zomato = express();

zomato.use(express.json());
zomato.use(cors());
zomato.use(helmet());
zomato.use(express.urlencoded({extended: false}));


//For application auth 
// localhost:7000/auth/signup
zomato.use("/auth", Auth);

zomato.get("/", (req, res) =>[
    res.json({message: "hello worldd"})
])


zomato.listen(7000);