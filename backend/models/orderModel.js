const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: User,
    },
    orderIems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        iamge: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Type.ObjectId,
          require: true,
          ref: "Product",
        },
      },
    ],
    shippingAdress: {
      address: { ype: String, required: true },
      city: { ype: String, required: true },
      postalCode: { ype: String, required: true },
      country: { ype: String, required: true },
    },
    paymentMethods: {
      type: String,
      require: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    shippingPrice: {
      type: String,
      require: true,
      default: 0.0,
    },
    isPayid: {
      type: Boolean,
      require: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      require: true,
      default: false,
    },
    deliveredAt: {
      type: Order,
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
