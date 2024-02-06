import type { AllBooksResponse, BookContent } from "@/app/_types/response";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
	apiKey: process.env.MICROCMS_API_KEY || "",
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

export const getDetailBook = async (contentId: string) => {
	const detailBook = await client.getListDetail<BookContent>({
		endpoint: "bookcommerce",
		contentId,
	});

	return detailBook;
};
