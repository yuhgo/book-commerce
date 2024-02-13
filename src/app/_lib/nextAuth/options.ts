import { prisma } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { DefaultSession, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}

// const isProduction = process.env.NODE_ENV === "production";
// const githubEnv = {
// 	clientId: isProduction ? process.env.GITHUB_ID_PROD : process.env.GITHUB_ID_DEV,
// 	clientSecret: isProduction ? process.env.GITHUB_SECRET_PROD : process.env.GITHUB_SECRET_DEV,
// };

export const nextAuthOptions = {
	debug: false,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	adapter: PrismaAdapter(prisma),
	callbacks: {
		session: ({ session, user }) => {
			return {
				...session,
				user: {
					...session.user,
					id: user.id,
				},
			};
		},
	},
} satisfies NextAuthOptions;
