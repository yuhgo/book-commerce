import { prisma } from "@/app/_lib/prisma";
import type { Purchase } from "@prisma/client";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export type CheckoutSuccessResponse = {
	purchase: Purchase;
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// 購入履歴の保存
export const POST = async (
	request: Request,
	_response: Response,
): Promise<NextResponse<CheckoutSuccessResponse | unknown>> => {
	const { sessionId } = await request.json();

	try {
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		const existingPurchase = await prisma.purchase.findFirst({
			where: {
				userId: session.client_reference_id as string,
				bookId: session.metadata?.bookId,
			},
		});

		if (existingPurchase) {
			return NextResponse.json({ message: "すでに購入済みです。" });
		}

		const purchase = await prisma.purchase.create({
			data: {
				// biome-ignore lint/style/noNonNullAssertion: 必ず存在するため
				userId: session.client_reference_id!,
				// biome-ignore lint/style/noNonNullAssertion: 必ず存在するため
				bookId: session.metadata?.bookId!,
			},
		});

		return NextResponse.json({ purchase });
	} catch (error) {
		return NextResponse.json(error);
	}
};
