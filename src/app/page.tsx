import type { ReactNode } from "react";

export default function TopPage() {
	return <div>hoge</div>;
}

export const Container = ({ children }: { children: ReactNode }) => {
	return <div>{children}</div>;
};
