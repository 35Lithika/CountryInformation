const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 5000;

// DB connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "LITHI@0608",
  port: 5432,
});

// Middleware
app.use(cors());
app.use(express.json());

// Save selected country
app.post("/api/selected_country", async (req, res) => {
  const { name, capital, population, region, language } = req.body;
  try {
    await pool.query(
      `INSERT INTO selected_countries (name, capital, population, region, language) VALUES ($1, $2, $3, $4, $5)`,
      [name, capital, population, region, language]
    );
    res.status(200).json({ message: "Saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
