import type { CheckoutSuccessResponse } from "@/app/api/checkout/success/route";
import Link from "next/link";
import type { FC } from "react";

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

const PurchaseSuccess: FC<Props> = async (props) => {
	const { searchParams } = props;

	const sessionId = (searchParams.session_id as string) ?? "";

	const data = await fetch(`${process.env.API_URL}/checkout/success`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ sessionId }),
	})
		.then(async (res) => {
			return (await res.json()) as CheckoutSuccessResponse;
		})
		.catch((error) => console.error(error));

	const purchasedBookId = data?.purchase.bookId ?? "";
	const purchasedBookUrl = purchasedBookId ? `/book/${purchasedBookId}` : "/";

	return (
		<div className="mt-20 flex items-center justify-center">
			<div className="rounded-lg bg-white p-6 shadow-lg">
				<h1 className="mb-4 text-center font-bold text-2xl text-gray-800">購入ありがとうございます！</h1>
				<p className="text-center text-gray-600">
					ご購入いただいた内容の詳細は、登録されたメールアドレスに送信されます。
				</p>
				<div className="mt-6 text-center">
					<Link href={purchasedBookUrl} className="text-indigo-600 transition duration-300 hover:text-indigo-800">
						購入した記事を読む
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PurchaseSuccess;
