const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Define a welcome message route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://hafshan26:<Yv6emhUwlNgWbWH3>@cluster0.7o9npur.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection errors
mongoose.connection.on('error', (error) => {
  console.error('MongoDB Connection Error: ' + error);
});

// Handle MongoDB connection success
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  


  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
