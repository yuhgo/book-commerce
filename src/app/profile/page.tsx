import { PurchasedBook } from "@/app/_component/PurchasedBook";
import { getDetailBook } from "@/app/_lib/microcms/client";
import { nextAuthOptions } from "@/app/_lib/nextAuth/options";
import type { Purchase } from "@prisma/client";
import { getServerSession } from "next-auth";
import Image from "next/image";

const ProfilePage = async () => {
	const session = await getServerSession(nextAuthOptions);
	const user = session?.user;

	const res = await fetch(`${process.env.API_URL}/purchases/${user?.id}`, { cache: "no-store" });
	const purchasesData = (await res.json()) as Purchase[];

	const purchasedBooks = await Promise.all(
		purchasesData.map(async (purchase) => {
			return await getDetailBook(purchase.bookId);
		}),
	);

	return (
		<div className="container mx-auto p-4">
			<h1 className="mb-4 font-bold text-xl">プロフィール</h1>

			<div className="rounded bg-white p-4 shadow-md">
				<div className="flex items-center">
					<Image
						priority={true}
						src={user?.image ?? "/default_icon.png"}
						alt="user profile_icon"
						width={60}
						height={60}
						className="rounded-t-md"
					/>
					<h2 className="ml-4 font-semibold text-lg">お名前：{user?.name}</h2>
				</div>
			</div>

			<span className="mt-4 mb-4 block font-medium text-lg">購入した記事</span>
			<div className="flex items-center gap-6">
				{purchasedBooks.map((purchasedBook) => {
					return <PurchasedBook key={purchasedBook.id} purchasedBook={purchasedBook} />;
				})}
			</div>
		</div>
	);
};

export default ProfilePage;
