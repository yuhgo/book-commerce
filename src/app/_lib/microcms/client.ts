import type { AllBooksResponse } from "@/app/_types/response";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "",
	apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
});

export const getAllBooks = async () => {
	const allBooks = await client.get<AllBooksResponse>({
		endpoint: "bookcommerce",
		queries: {
			offset: 0,
			limit: 10,
		},
	});

	return allBooks;
};
