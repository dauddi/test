import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
		<Html lang="en">
			<Head />
			<body className="bg-gradient-to-r from-gray-100 to-gray-300 max-w-[720px] mx-auto my-8 min-h-screen">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
