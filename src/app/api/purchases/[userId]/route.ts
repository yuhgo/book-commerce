import { prisma } from "@/app/_lib/prisma";
import type { Purchase } from "@prisma/client";
import { NextResponse } from "next/server";

// 購入履歴検索API
export const GET = async (
	_request: Request,
	{ params }: { params: { userId: string } },
): Promise<NextResponse<Purchase[] | unknown>> => {
	const { userId } = params;

	try {
		const purchases = await prisma.purchase.findMany({
			where: { userId },
		});

		return NextResponse.json(purchases);
	} catch (error) {
		return NextResponse.json(error);
	}
};
