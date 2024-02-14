import { Book } from "@/app/_component/Book";
import { getPurchases } from "@/app/_lib/api/getPurchases";
import { getAllBooks } from "@/app/_lib/microcms/client";
import { nextAuthOptions } from "@/app/_lib/nextAuth/options";
import { getServerSession } from "next-auth";

export default async function Home() {
	const books = await getAllBooks();
	const session = await getServerSession(nextAuthOptions);
	const user = session?.user;

	const purchasesData = user?.id ? await getPurchases(user?.id) : [];

	const purchaseBookIds = purchasesData.map((purchase) => purchase.bookId);

	return (
		<>
			<main className="mt-20 flex flex-wrap items-center justify-center md:mt-32">
				<h2 className="mb-2 w-full text-center font-bold text-3xl">Book Commerce</h2>
				{books.contents.map((content) => (
					<Book key={content.id} book={content} isPurchased={purchaseBookIds.includes(content.id)} user={user} />
				))}
			</main>
		</>
	);
}
