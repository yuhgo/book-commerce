import { Book } from "@/app/_component/Book";
import { getAllBooks } from "@/app/_lib/microcms/client";
import { nextAuthOptions } from "@/app/_lib/nextAuth/options";
import type { Purchase } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function Home() {
	const books = await getAllBooks();
	const session = await getServerSession(nextAuthOptions);
	const user = session?.user;

	const res = await fetch(`${process.env.API_URL}/purchases/${user?.id}`, { cache: "no-store" });
	const purchasesData = (await res.json()) as Purchase[];

	const purchaseBookIds = purchasesData.map((purchase) => purchase.bookId);

	return (
		<>
			<main className="mt-20 flex flex-wrap items-center justify-center md:mt-32">
				<h2 className="mb-2 w-full text-center font-bold text-3xl">Book Commerce</h2>
				{books.contents.map((content) => (
					<Book key={content.id} book={content} isPurchased={purchaseBookIds.includes(content.id)} />
				))}
			</main>
		</>
	);
}
