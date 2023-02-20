import { IBookType } from "@utils/types/types";
import React from "react";

interface BookProps {
	book: IBookType;
	handleViewBook: (id: string | number) => void;
}

/**
 * Receives a single book's details as props
 * @returns A single book's details
 */
const Book: React.FC<BookProps> = ({ book, handleViewBook }) => {
	return (
		<div data-testid="book" className="w-full shadow-sm px-4 py-2 rounded-md">
			<h3
				onClick={(event) => {
					event.preventDefault();
					handleViewBook(book.id);
				}}
				className="font-medium text-lg text-green-800 hover:cursor-pointer "
				data-testid="book-title"
			>
				{book.id}. {book.title}
			</h3>
			<p data-testid="book-author" className="text-sm">
				<i className="text-gray-500 text-xs">by</i> {book.author}
			</p>
		</div>
	);
};

export default Book;
