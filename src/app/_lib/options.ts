import { prisma } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const nextAuthOptions = {
	debug: true,
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
	],
	adapter: PrismaAdapter(prisma),
	// endpoints: {},
	// database: process.env.POSGRES_URL || "",
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
