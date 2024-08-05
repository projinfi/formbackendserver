const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route to check if server is running
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.post('/submit-form', (req, res) => {
  const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('User IP Address:', userIp);

  // Handle form data here
  const { name, phone, city } = req.body;

  // Send back the IP address in the response
  res.json({ userIp });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
