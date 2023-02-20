// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
	// Handles a GET / request which returns a list of books
	rest.get("http://localhost/api/books", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				data: [
					{
						id: 1,
						title: "To Kill a Mockingbird",
						author: "Harper Lee",
						publisher: "J. B. Lippincott & Co.",
						publication_date: "1960",
						synopsis:
							"To Kill a Mockingbird is a novel by Harper Lee published in 1960.",
					},
					{
						id: 2,
						title: "The Great Gatsby",
						author: "F. Scott Fitzgerald",
						publisher: "Charles Scribner's Sons",
						publication_date: "1925",
						synopsis:
							"The Great Gatsby is a novel by American author F. Scott Fitzgerald. Set in the Roaring Twenties.",
					},
				],
			})
		);
	}),
];
