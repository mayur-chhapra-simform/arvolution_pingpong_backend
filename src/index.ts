/**
 * Author: Mayur Chhapra
 */

// Express
import express from "express";
import "dotenv/config";

// Routes
import routes from './routes'
import "./config/db";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configure Routes
routes(app)

// Start Server
app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
} );