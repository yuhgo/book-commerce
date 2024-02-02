import { Book } from "@/app/_component/Book";
import { getAllBooks } from "@/app/_lib/microcms/client";

// type Author = {
// 	id: number;
// 	name: string;
// 	description: string;
// 	profile_icon: string;
// };
// export type TBook = {
// 	id: number;
// 	title: string;
// 	thumbnail: string;
// 	price: number;
// 	author: Author;
// 	content: string;
// 	createdAt: string;
// 	updateAt: string;
// };

// 疑似データ
// const books = [
// 	{
// 		id: 1,
// 		title: "Book 1",
// 		thumbnail: "/thumbnails/discord-clone-udemy.png",
// 		price: 2980,
// 		author: {
// 			id: 1,
// 			name: "Author 1",
// 			description: "Author 1 description",
// 			profile_icon: "https://source.unsplash.com/random/2",
// 		},
// 		content: "Content 1",
// 		createdAt: new Date().toString(),
// 		updateAt: new Date().toString(),
// 	},
// 	{
// 		id: 2,
// 		title: "Book 2",
// 		thumbnail: "/thumbnails/notion-udemy.png",
// 		price: 1980,
// 		author: {
// 			id: 2,
// 			name: "Author 2",
// 			description: "Author 2 description",
// 			profile_icon: "https://source.unsplash.com/random/3",
// 		},
// 		content: "Content 2",
// 		createdAt: new Date().toString(),
// 		updateAt: new Date().toString(),
// 	},
// 	{
// 		id: 3,
// 		title: "Book 3",
// 		price: 4980,
// 		thumbnail: "/thumbnails/openai-chatapplication-udemy.png",
// 		author: {
// 			id: 3,
// 			name: "Author 3",
// 			description: "Author 3 description",
// 			profile_icon: "https://source.unsplash.com/random/4",
// 		},
// 		content: "Content 3",
// 		createdAt: new Date().toString(),
// 		updateAt: new Date().toString(),
// 	},
// 	// 他の本のデータ...
// ];

export default async function Home() {
	const books = await getAllBooks();

	return (
		<>
			<main className="mt-20 flex flex-wrap items-center justify-center md:mt-32">
				<h2 className="mb-2 w-full text-center font-bold text-3xl">Book Commerce</h2>
				{books.contents.map((content) => (
					<Book key={content.id} book={content} />
				))}
			</main>
		</>
	);
}
