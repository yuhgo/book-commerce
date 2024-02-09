module.exports = {
	// Created by Vercel CLI
	NX_DAEMON: "",
	TURBO_REMOTE_ONLY: "",
	TURBO_RUN_SUMMARY: "",
	VERCEL: "1",
	VERCEL_ENV: "development",
	VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "",
	VERCEL_GIT_COMMIT_AUTHOR_NAME: "",
	VERCEL_GIT_COMMIT_MESSAGE: "",
	VERCEL_GIT_COMMIT_REF: "",
	VERCEL_GIT_COMMIT_SHA: "",
	VERCEL_GIT_PREVIOUS_SHA: "",
	VERCEL_GIT_PROVIDER: "",
	VERCEL_GIT_PULL_REQUEST_ID: "",
	VERCEL_GIT_REPO_ID: "",
	VERCEL_GIT_REPO_OWNER: "",
	VERCEL_GIT_REPO_SLUG: "",
	VERCEL_URL: "",

	// Environment variables declared in this file are automatically made available to Prisma.
	// See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

	// Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
	// See the documentation for all the connection string options: https://pris.ly/d/connection-strings

	// DATABASE_URL:"postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
	DATABASE_URL: "postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public",
	POSTGRES_URL:
		"postgres://default:JViY6WaoOLx8@ep-little-truth-67327310-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb",
	POSTGRES_PRISMA_URL:
		"postgres://default:JViY6WaoOLx8@ep-little-truth-67327310-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15",
	POSTGRES_URL_NON_POOLING:
		"postgres://default:JViY6WaoOLx8@ep-little-truth-67327310.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb",
	POSTGRES_USER: "default",
	POSTGRES_HOST: "ep-little-truth-67327310-pooler.ap-southeast-1.postgres.vercel-storage.com",
	POSTGRES_PASSWORD: "JViY6WaoOLx8",
	POSTGRES_DATABASE: "verceldb",

	// GitHub OAuth
	GITHUB_ID: "7ce45d01db38c5ec49b3",
	GITHUB_SECRET: "093e29e00474b779c102ed2f1e2bfc90a6441d9b",

	// NextAuth
	NEXTAUTH_URL: "http://localhost:3000/api/auth",
	NEXTAUTH_SECRET: "gajBTncq8tUkoPcH+EFltZro9dS816h4j1N8P4wYvgw:",

	MICROCMS_SERVICE_DOMAIN: "book-commerce-yugo",
	MICROCMS_API_KEY: "e9LLRVpDKRnZkWmdWsgwLViaPgeWjpeBk2yI",

	STRIPE_SECRET_KEY:
		"sk_test_51OfHXICWryaBagiWcuXHagYXf5hRqc0KaTLQtzPB7xWEdLzkmpOrH0ozBLNcOCoeHVmWa7yK4pJezUM038A0Rlj300lGSqUZS5",
	NEXT_PUBLIC_API_URL: "http://localhost:3000/api",
	API_URL: "http://localhost:3000/api",
};
