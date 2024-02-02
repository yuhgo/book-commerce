import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(request: Request, _response: Response) {
	const { title, price } = await request.json();

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: title,
						},
						unit_amount: price,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			// success_url: `http://localhost:3000/book/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
		});
	} catch (error) {
		throw Error(error as string);
	}
}
