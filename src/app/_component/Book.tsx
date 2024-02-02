"use client";

import type { BookContent } from "@/app/_types/response";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type FC, useState } from "react";

type Props = {
	book: BookContent;
};

export const Book: FC<Props> = (props) => {
	const { book } = props;

	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	const { data } = useSession();
	const user = data?.user;

	const handlePurChaseClick = () => {
		setShowModal(true);
	};

	const handlePurchaseConfirm = () => {
		if (user) {
			setShowModal(false);
			// ログインページへリダイレクト
			router.push("/login");
		} else {
			// Stripeの決済処理
		}
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className="m-4 flex flex-col items-center">
				<button
					type="button"
					onClick={() => handlePurChaseClick()}
					className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
					tabIndex={0} // クリック可能な要素にはtabIndex={0}を追加
				>
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
				</button>

				{showModal && (
					<div className="absolute inset-0 flex animate-modal items-center justify-center bg-slate-900 bg-opacity-50 duration-300">
						<div className="rounded-lg bg-white p-8">
							<h3 className="mb-4 text-xl">本を購入しますか？</h3>
							<button
								type="button"
								onClick={() => handlePurchaseConfirm()}
								className="mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
							>
								購入する
							</button>
							<button
								type="button"
								onClick={() => handleCancel()}
								className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
							>
								キャンセル
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
