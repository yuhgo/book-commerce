import type { BookContent } from "@/app/_types/response";
import type { User } from "next-auth";

export const postCheckout = async (checkoutData: BookContent, user?: User) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title: checkoutData.title,
			price: checkoutData.price,
			bookId: checkoutData.id,
			userId: user?.id,
		}),
	});

	if (!res.ok) {
		throw Error("Error posting checkout data");
	}

	// biome-ignore lint/style/useNamingConvention: <explanation>
	const json = (await res.json()) as { checkout_url: string };

	return json;
};
