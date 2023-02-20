// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import booksData from "../../data/books.json";
import { IBookType } from "@utils/types/types";

interface BooksResponse {
	data: Array<IBookType>;
}

function findById(id: number) {
	return booksData.data.find((book) => book.id === id);
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<BooksResponse>
) {
	const { method } = req;
	const { id } = req.query;

	if (method === "GET") {
		if (id) {
			const book = findById(Number(id));
			if (!book) {
				return res.status(404).json({ data: [] });
			}
			return res.status(200).json({ data: [book] });
		}
		return res.status(200).json(booksData);
	}
}
