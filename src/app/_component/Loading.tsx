"use client";

import { ClipLoader } from "react-spinners";

export const Loading = () => {
	const size = 50;
	const color = "#123abc";

	return (
		<div className="flex h-screen min-h-screen items-center justify-center">
			<ClipLoader size={size} color={color} />
		</div>
	);
};
