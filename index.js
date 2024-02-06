const express = require('express');
const path = require('path');
require('dotenv').config();
const { Pool } = require('pg');
const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
const pino = require('pino');
const isDev = process.env.NODE_ENV == "development" || false;

const logger = pino({
  level: isDev ? "debug" : "info"
}) 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


app.post('/increaseCounter', async (req, res) => {
  try {
    const threshold = 1;
    logger.debug({threshold}, "counter increased.")
    let count = await pool.query('UPDATE counter set count=count+$1 RETURNING count;', [threshold]);

    res.json({ count: count.rows[0].count });
  } catch (error) {
    logger.error({error}, "error occured while increasing counter")
    res.status(500).send('Internal Server Error');
  }
});


app.post('/resetCounter', async (req, res) => {
  try {
    logger.debug("counter reset to 0.")
    let count = await pool.query('UPDATE counter SET count = 0 RETURNING count');
    
    // Send the response with the updated counter value
    res.json({ count: count.rows[0].count });
  } catch (error) {
    logger.error({error}, "error occured while reseting counter")
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getCounter', async (req, res) => {
  try {
    // Fetch the current counter value from the database
    const result = await pool.query('SELECT count FROM counter');
    
    // Send the response with the current counter value
    res.json({ count: result.rows[0].count });
  } catch (error) {
    logger.error({error}, "error occured while fetching counter")
    res.status(500).send('Internal Server Error');
  }
});

async function initializeDatabase() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS counter (
      count INT
    );
  `;
  await pool.query(createTableQuery);
  logger.debug("table(s) created.")
  const result = await pool.query('SELECT count FROM counter');
    
  if(result.rowCount<=0){
    await pool.query('INSERT into counter (count) values(0)');
  }
  logger.debug("migrations completed.")
}
async function startServer() {  
  try {
    await initializeDatabase();
  } catch(error) {
    logger.error({error}, "error occured init database")
    process.exit(1)
  }
  
  // Serve static files from the 'public' directory
  app.use('/', express.static(path.join(__dirname, 'public')))
  
  // Start the server
  app.listen(port, host, () => {
    logger.info({host, port}, "server is running...")
  });
}

startServer();