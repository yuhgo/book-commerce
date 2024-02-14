import type { Purchase } from "@prisma/client";

export const getPurchases = async (userId: string): Promise<Purchase[]> => {
	const res = await fetch(`${process.env.API_URL}/purchases/${userId}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw Error("Error fetching purchases");
	}
	const json = await res.json();

	return json as Purchase[];
};
