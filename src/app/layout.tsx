import { Header } from "@/app/_component/Header";
import { Loading } from "@/app/_component/Loading";
import { NextAuthProvider } from "@/app/_lib/nextAuth/provider";
import "@/app/globals.css";

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { type ReactNode, Suspense } from "react";

const noteSansJp = Noto_Sans_JP({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Book Commerce",
	description: "Book Commerce",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className={noteSansJp.className} lang="ja">
			<body className="light">
				<NextAuthProvider>
					<Header />
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</NextAuthProvider>
			</body>
			{/*
      TODO: GTMの設定をする
      https://zenn.dev/chot/articles/introduction-of-next-third-parties
      */}
			{/* <GoogleTagManager gtmId="GTM-XYZ" /> */}
		</html>
	);
}
