/**
 * Author: Mayur Chhapra
 */

// Express
import express from "express";

// Routes
import routes from './routes'


const app = express();
const PORT = 8080;

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure Routes
routes(app)

// Start Server
app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
} );