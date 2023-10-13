import Stripe from "stripe";

export default class PaymentService {
  constructor() {
    // esto deberia ser variable de entorno!!!
    this.stripe = new Stripe('');
  }

  async createPaymentIntent({ amount, currency = "usd" }) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency,
      metadata: {
        product_id: 1,
        product_name: "papas",
        product_price: 1000,
        user: JSON.stringify({
          id: 1,
          name: "Juan Perez",
          email: "jperez@gmail.com"
        }, null, '\t')
      }, 
    });

    return paymentIntent;
  }
}