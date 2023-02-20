import React, { useEffect } from "react";
import useBooks from "@utils/hooks/useBooks";
import BooksList from "./BooksList";

/**
 * Gets books data from the API
 * Passes the data to the BooksList component
 */
const BooksContainer = () => {
	const { data, error, isLoading, fetchBooks } = useBooks();

	useEffect(() => {
		fetchBooks();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Something went wrong...</div>;
	}

	return (
		<div className="my-8" data-testid="books-container">
			<BooksList data={data} />
		</div>
	);
};

export default BooksContainer;
