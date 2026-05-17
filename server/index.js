import express from "express";
import dotenv from "dotenv";

// Load env Server
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello from Baby Mart Server')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Client URL: ${process.env.Client_URL}`);
  console.log(`Admin URL: ${process.env.ADMIN_URL}`);
  console.log(`API docs available at: http://localhost:${PORT}/api/docs`);
})
