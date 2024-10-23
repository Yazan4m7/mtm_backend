require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const rateLimit = require('./middleware/rateLimit');
// const authenticateToken = require('./middleware/authenticateToken');
const { sendEmail } = require('./routes/sendgmail');


const userRouter = require('./routes/user');
const inspectionRouter = require('./routes/inspections');
const progressRecordRouter = require('./routes/progressrecord');
const counterRoutes = require('./routes/counter');
const costRouter = require('./routes/cost');

const app = express();

const Port =5000;

// MongoDB connection string
const DB = process.env.DB_URI;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:30072', credentials: true }));
app.use(userRouter);

// app.use(authenticateToken);
// app.use(rateLimit);
app.use(inspectionRouter);
app.use(progressRecordRouter);
app.use(counterRoutes);
app.use(costRouter);


app.post('/send-email', async (req, res) => {
  const { to, subject, body } = req.body;
  const result = await sendEmail(to, subject, body);

  if (result.success) {
    res.status(200).send(result.message);
  } else {
    res.status(500).send(result.message);
  }
});

mongoose.connect(DB)
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
