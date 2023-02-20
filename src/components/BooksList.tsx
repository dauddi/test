import React, { useEffect, useState } from "react";
import { IBookType } from "@utils/types/types";
import { Book } from "@components";
import { useRouter } from "next/router";

interface BooksListProps {
	data: Array<IBookType>;
}

const BooksList: React.FC<BooksListProps> = ({ data }) => {
	const router = useRouter();
	const [books, setBooks] = useState<Array<IBookType>>([]);

	useEffect(() => {
		if (!data) return;
		setBooks(data);
	}, [data]);

	const handleViewBook = (id: string | number) => {
		router.push(`/book/${id}`);
	};

	return (
		<div data-testid="books-list" className="flex flex-col gap-4">
			{books.map((book) => (
				<Book key={book.id} book={book} handleViewBook={handleViewBook} />
			))}
		</div>
	);
};

export default BooksList;
