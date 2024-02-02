"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	const { data } = useSession();
	const user = data?.user;

	return (
		<header className="bg-slate-600 text-gray-100 shadow-lg">
			<nav className="flex items-center justify-between p-4">
				<Link href={"/"} className="font-bold text-xl">
					Book Commerce
				</Link>
				<div className="flex items-center gap-1">
					<Link href="/" className="rounded-md px-3 py-2 font-medium text-gray-300 text-sm hover:text-white">
						ホーム
					</Link>
					<Link href="/login" className="rounded-md px-3 py-2 font-medium text-gray-300 text-sm hover:text-white">
						ログイン
					</Link>

					<Link href="/profile">
						<Image width={50} height={50} alt="profile_icon" src={user?.image ?? "/default_icon.png"} />
					</Link>
				</div>
			</nav>
		</header>
	);
};
