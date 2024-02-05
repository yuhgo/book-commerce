import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(request: Request, _response: Response) {
	const { title, price } = await request.json();

	console.log("Title:", title);

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: "jpy",
						product_data: {
							name: title,
						},
						unit_amount: price,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			// biome-ignore lint/style/noUnusedTemplateLiteral: udemyのコース通りに書くため一旦無視
			success_url: `http://localhost:3000/book/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: "http://localhost:3000",
		});

		return NextResponse.json({ checkout_url: session.url });

		// biome-ignore lint/suspicious/noExplicitAny: udemyのコース通りに書くため一旦無視
	} catch (error: any) {
		console.log("Error:", error.message);

		return NextResponse.json(error.message);
	}
}
