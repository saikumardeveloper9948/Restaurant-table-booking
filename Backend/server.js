
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
 require("dotenv").config()



const app = express();
const port = 5001; 


const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret:process.env.key_secret,
});

app.use(cors()); 
app.use(express.json());


app.post('/api/payment/create-order', async (req, res) => {
  const { amount } = req.body; 

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
