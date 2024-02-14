import type { CheckoutSuccessResponse } from "@/app/api/checkout/success/route";

export const postCheckoutSuccess = async (sessionId: string): Promise<CheckoutSuccessResponse> => {
	const res = await fetch(`${process.env.API_URL}/checkout/success`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ sessionId }),
	});
	if (!res.ok) {
		throw Error("Error posting checkout success data");
	}
	const json = await res.json();

	return json as CheckoutSuccessResponse;
};
