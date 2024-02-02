import type { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

export type AllBooksResponse = {
	contents: BookContent[];
	totalCount: number;
	offset: number;
	limit: number;
};

export type BookContent = {
	title: string;
	content: string;
	price: number;
	thumbnail: {
		url: string;
		height: number;
		width: number;
	};
} & MicroCMSDate &
	MicroCMSContentId;
