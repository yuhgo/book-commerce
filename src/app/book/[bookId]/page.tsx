import type { FC } from "react";

import { getDetailBook } from "@/app/_lib/microcms/client";
import Image from "next/image";

type Props = {
	params: { bookId: string };
};

const page: FC<Props> = async (props) => {
	const { params } = props;

	const book = await getDetailBook(params.bookId);

	return (
		<div className="container mx-auto p-4">
			<div className="overflow-hidden rounded-lg bg-white shadow-lg">
				<Image
					className="h-80 w-full object-cover object-center"
					src={book.thumbnail.url}
					alt={book.title}
					width={700}
					height={700}
				/>
				<div className="p-4">
					<h2 className="font-bold text-2xl">{book.title}</h2>
					<div
						className="mt-2 text-gray-700"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: book.content }}
					/>

					<div className="mt-2 flex items-center justify-between">
						<span className="text-gray-500 text-sm">
							公開日: {new Date(book.publishedAt ?? book.createdAt).toLocaleString()}
						</span>
						<span className="text-gray-500 text-sm">最終更新: {new Date(book.updatedAt).toLocaleString()}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
