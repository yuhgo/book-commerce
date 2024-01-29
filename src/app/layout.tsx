import "@/app/globals.css";

import type { Metadata } from "next";
import { Zen_Antique } from "next/font/google";
import type { ReactNode } from "react";

const zenAntique = Zen_Antique({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-zen-antique",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Next Frontier",
	description: "Next Frontier",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className={zenAntique.variable} lang="ja">
			<body className="light">{children}</body>
			{/*
      TODO: GTMの設定をする
      https://zenn.dev/chot/articles/introduction-of-next-third-parties
      */}
			{/* <GoogleTagManager gtmId="GTM-XYZ" /> */}
		</html>
	);
}
