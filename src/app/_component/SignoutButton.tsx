"use client";

import { signOut } from "next-auth/react";
import type { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const SignoutButton: FC<Props> = (props) => {
	const { children } = props;

	return (
		<button
			type="button"
			onClick={() => signOut({ callbackUrl: "/login" })}
			className="rounded-md px-3 py-2 font-medium text-gray-300 text-sm hover:text-white"
		>
			{children}
		</button>
	);
};
