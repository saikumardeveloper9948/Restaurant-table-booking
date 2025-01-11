// server.js
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const port = 5000; // You can use any port

// Razorpay instance with your keys
const razorpay = new Razorpay({
  key_id: "rzp_test_K7NRyE8rha3ije",
  key_secret:"WJW6xRqIfl2bXHp2CFDpYb0E",
});

app.use(cors()); // Enable CORS for frontend to access this API
app.use(express.json()); // To parse JSON request bodies

// Route to create Razorpay order
app.post('/api/payment/create-order', async (req, res) => {
  const { amount } = req.body; // Amount in rupees

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay requires the amount in paise (1 INR = 100 paise)
      currency: 'INR',
      receipt: `order_rcptid_${Math.random() * 1000}`,
      payment_capture: 1,
    });
    console.log('Order response:', order);
    res.status(200).json({ orderId: order.id });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Error creating Razorpay order' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
