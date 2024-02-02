"use client";

import type { BookContent } from "@/app/_types/response";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type Props = {
	book: BookContent;
};

export const Book: FC<Props> = (props) => {
	const { book } = props;

	return (
		<>
			<div className="m-4 flex flex-col items-center">
				<Link href="" className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none">
					<Image
						priority={true}
						src={book.thumbnail.url}
						alt={book.title}
						width={450}
						height={350}
						className="rounded-t-md"
					/>
					<div className="rounded-b-md bg-slate-100 px-4 py-4">
						<h2 className="font-semibold text-lg">{book.title}</h2>
						<p className="mt-2 text-lg text-slate-600">この本は○○..</p>
						<p className="mt-2 text-md text-slate-700">値段 : {book.price}円</p>
					</div>
				</Link>

				{/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-50 flex justify-center items-center modal">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl mb-4">本を購入しますか？</h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              購入する
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              キャンセル
            </button>
          </div>
        </div> */}
			</div>
		</>
	);
};
