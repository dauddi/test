import { BookContainer } from "@components";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>TDD Book App</title>
				<meta
					name="description"
					content="Sample next app for tdd in react book review"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="text-xl font-bold ">Books App</h1>
				<BookContainer />
			</main>
		</>
	);
}
