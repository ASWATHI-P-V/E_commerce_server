// OrderHistory.js
const mongoose = require('mongoose');


const orderHistorySchema = new mongoose.Schema({
  items: [
    {
      product_id: String,
      product_name: String,
      company: String,
      price: Number,
      quantity: Number,
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
 
});

module.exports = mongoose.model('OrderHistory', orderHistorySchema);
