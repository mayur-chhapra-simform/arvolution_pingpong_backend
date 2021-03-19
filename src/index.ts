/**
 * Author: Mayur Chhapra
 */

// Express
import express from "express";
import "dotenv/config";

// Routes
import routes from './routes'
import db from "./config/db";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configure Routes
routes(app)

db.once("open", () => {
    console.log("DB Connected.");
    app.listen( PORT, () => {
        console.log( `server started at http://localhost:${ PORT }` );
    } );

    app.emit( "app_started" )
});

// Start Server

export default app