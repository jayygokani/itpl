const express = require('express');
const path = require('path');
require('dotenv').config();
const { Pool } = require('pg');
const app = express();
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 3000;
// const { app, initializeDatabase } = require('./server/server');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.post('/increaseCounter', async (req, res) => {
  try {
    const threshold = 10;
    let count = await pool.query('UPDATE counter set count=count+$1 RETURNING count;', [threshold]);

    res.json({ count: count.rows[0].count });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/resetCounter', async (req, res) => {
  try {
    // Reset the counter to 0 in the database
    let count = await pool.query('UPDATE counter SET count = 0 RETURNING count');
    
    // Send the response with the updated counter value
    res.json({ count: count.rows[0].count });
  } catch (error) {
    console.error('Error:', error);
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
    console.error('Error fetching counter:', error);
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
  console.log("TABLE CREATED!")
  const result = await pool.query('SELECT count FROM counter');
  console.log("SELECT TABLE DONE", result.rowCount)
    
  if(result.rowCount<=0){
    await pool.query('INSERT into counter (count) values(0)');
    console.log("SINGLE CELL CREATED")
  }
}
async function startServer() {  
  try {
    await initializeDatabase();
  } catch(error) {
    console.error(error);
    process.exit(1)
  }
  
  // Serve static files from the 'public' directory
  app.use('/', express.static(path.join(__dirname, 'public')))
  
  // Start the server
  app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
  });
}

startServer();