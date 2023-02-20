import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	// if (process.env.NODE_ENV === "development") {
	// 	const { worker } = require("../mocks/browser");
	// 	worker.start();
	// }

	return <Component {...pageProps} />;
}
