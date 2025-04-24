import "reflect-metadata";
import env from "./util/validateEnv";
import dotenv from "dotenv";
dotenv.config();
//import "dotenv/config"
import express from "express";
import { mongoose } from "@typegoose/typegoose";
import UserModel from "./models/user/schema/user.schema";

const app = express()
//app.use(express.json())

app.get ("/", async (req, res) => {
 try {
    throw Error("error")
    const user = await UserModel.find().exec();
    res.status(200).json(user);
 } catch (error) {
    console.log("error");
    res.sendStatus(404).json({error:error});
 }
});

const port = env.PORT;

mongoose.connect(env.Mongo_url)
    .then(() => {
        console.log("mongoose connected");
        app.listen(port, () => {
            console.log("Server running on port:" + port);
        });
    })
    .catch (console.error);






export default app;