import { GithubLoginButton } from "@/app/login/_component/GithubLoginButton";
import { getProviders } from "next-auth/react";

const Login = async () => {
	const providers = await getProviders().then((res) => res);

	return (
		<div className="flex items-center justify-center px-4 py-16 lg:px-8 sm:px-6">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center font-extrabold text-3xl text-gray-900">アカウントにログイン</h2>
				</div>
				<div className="mt-8 space-y-6">
					{providers &&
						Object.values(providers).map((provider) => {
							const hoge = provider.id;
							if (provider.name === "GitHub") {
								return <GithubLoginButton key={provider.id} providerId={provider.id} />;
							}
						})}
					<div />
				</div>
			</div>
		</div>
	);
};

export default Login;
