import { NextFunction, Request, Response } from 'express';
require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const bodyParser = require("body-parser");
// const cors = require("cors");

// Middleware
app.use(bodyParser.json({ limit: "20mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// connectDb();

// Global Error Handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.statusCode || 500);
  const message = error.message || "There was an error";
  const data = error.data || null;
  if (error) console.log("Global Error Handler", error);
  res.json({ status: "error", message, data});
});

// Start Server
app.listen(port, () => console.log("Server running on port " + port));

