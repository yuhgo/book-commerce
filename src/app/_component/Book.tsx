"use client";

import Image from "next/image";
import { type FC, useState } from "react";

import type { BookContent } from "@/app/_types/response";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
	book: BookContent;
	isPurchased: boolean;
};

type CheckoutData = Pick<BookContent, "title" | "price">;

export const Book: FC<Props> = (props) => {
	const { book, isPurchased } = props;

	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	const { data } = useSession();
	const user = data?.user;

	const handlePurChaseClick = () => {
		if (isPurchased) {
			alert("この商品は購入済みです。");
			return;
		}
		setShowModal(true);
	};

	const startCheckout = async ({ title, price }: CheckoutData) => {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, price, bookId: book.id, userId: user?.id }),
			});

			const resData = await res.json();
			if (resData) {
				router.push(resData.checkout_url);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handlePurchaseConfirm = () => {
		if (user) {
			// Stripeの決済処理
			startCheckout({ title: book.title, price: book.price });
		} else {
			setShowModal(false);
			// ログインページへリダイレクト
			router.push("/api/auth/signin");
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
