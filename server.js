const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === process.env.PASSWORD) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
