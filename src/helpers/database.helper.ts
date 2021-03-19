/**
 * Author: Mayur Chhapra
 */

import * as sqlite3 from 'sqlite3';
sqlite3.verbose();

import path from 'path'

const DB_DIR_NAME = 'data'
const DB_NAME = 'arvolution.db'

const DB_PATH = path.join(__dirname, DB_DIR_NAME, DB_NAME);

const db = new sqlite3.Database(DB_PATH, (err: any) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Successful connection to the database ${DB_NAME}`);
});

// CREATE TABLE 

export default db;



