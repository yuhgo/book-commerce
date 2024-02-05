import Link from "next/link";

const PurchaseSuccess = () => {
	return (
		<div className="mt-20 flex items-center justify-center">
			<div className="rounded-lg bg-white p-6 shadow-lg">
				<h1 className="mb-4 text-center font-bold text-2xl text-gray-800">購入ありがとうございます！</h1>
				<p className="text-center text-gray-600">
					ご購入いただいた内容の詳細は、登録されたメールアドレスに送信されます。
				</p>
				<div className="mt-6 text-center">
					<Link href="/" className="text-indigo-600 transition duration-300 hover:text-indigo-800">
						購入した記事を読む
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PurchaseSuccess;
