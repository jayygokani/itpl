const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();
const app = express();
const port = 3000;
const path = require('path');
// const { app, initializeDatabase } = require('./server/server');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Check if the 'counter' table exists, and create it if not
async function initializeDatabase() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS counter (
      id SERIAL PRIMARY KEY,
      count INT
    );
  `;
  await pool.query(createTableQuery);
}

// initializeDatabase();

let counter = 0;


app.post('/increaseCounter', async (req, res) => {
  try {
    // Fetch the existing count from the 'counter' table
    const result = await pool.query('SELECT count FROM counter WHERE id = $1', [1]);

    // If there is a result, use the existing count, otherwise default to 0
    let counter = result.rows.length > 0 ? result.rows[0].count : 0;

    // Increment the counter
    counter++;

    // Update the existing row in the 'counter' table with the new count
    await pool.query('INSERT INTO counter (id, count) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET count = $2', [1, counter]);

    // Send the response with the updated counter value
    res.json({ counter });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// ... (previous code)

app.post('/resetCounter', async (req, res) => {
  try {
    // Reset the counter to 0 in the database
    await pool.query('UPDATE counter SET count = $1 WHERE id = $2', [0, 1]);

    // Send the response with the updated counter value
    res.json({ counter: 0 });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getCounter', async (req, res) => {
  try {
    // Fetch the current counter value from the database
    const result = await pool.query('SELECT count FROM counter WHERE id = $1', [1]);

    // If there is a result, use the existing count, otherwise default to 0
    const counter = result.rows.length > 0 ? result.rows[0].count : 0;

    // Send the response with the current counter value
    res.json({ counter });
  } catch (error) {
    console.error('Error fetching counter:', error);
    res.status(500).send('Internal Server Error');
  }
});


// ... (remaining code)



/**
 * POST
 * UPDATE table set counter+=1
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startServer() {
  await sleep(5000); // Add a delay of 10 seconds

  initializeDatabase();

  // Serve static files from the 'public' directory
  app.use('/', express.static(path.join(__dirname, 'public')))

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();