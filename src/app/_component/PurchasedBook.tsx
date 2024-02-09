import type { BookContent } from "@/app/_types/response";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type Props = {
	purchasedBook: BookContent;
};

export const PurchasedBook: FC<Props> = (props) => {
	const { purchasedBook } = props;

	return (
		<Link
			href={`/book/${purchasedBook.id}`}
			className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
		>
			<Image
				priority={true}
				src={purchasedBook.thumbnail.url}
				alt={purchasedBook.title}
				width={450}
				height={350}
				className="rounded-t-md"
			/>
			<div className="rounded-b-md bg-slate-100 px-4 py-4">
				<h2 className="font-semibold text-lg">{purchasedBook.title}</h2>
				<p className="mt-2 text-md text-slate-700">値段：{purchasedBook.price}円</p>
			</div>
		</Link>
	);
};
