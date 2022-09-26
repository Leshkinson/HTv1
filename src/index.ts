import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import {router} from "./router";
import {errorMiddleware} from './middleware/error-middleware'
const PORT = process.env.PORT || 4546
const app = express()

app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);
// @ts-ignore
app.use(errorMiddleware);

const startAPP = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been start on http://localhost:${PORT}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

startAPP();
