import { Book } from "@components";
import { render } from "@testing-library/react";
import React from "react";

describe("Book component", () => {
	const mockHandleViewBook = jest.fn();
	const mockBook = {
		id: 1,
		title: "The test book",
		author: "Michael Test",
		publisher: "Penguin Books",
		publication_date: "1969",
		synopsis: "This a test synopsis",
	};

	it("should render correctly", () => {
		const { getByTestId } = render(
			<Book book={mockBook} handleViewBook={mockHandleViewBook} />
		);

		expect(getByTestId("book")).toHaveTextContent("The test book");
		expect(getByTestId("book")).toHaveTextContent("Michael Test");
	});

	it("should call handleViewBook when the view button is clicked", () => {
		const { getByTestId, getAllByTestId } = render(
			<Book book={mockBook} handleViewBook={mockHandleViewBook} />
		);

		const viewButton = getAllByTestId("book-title")[0];
		viewButton.click();

		expect(mockHandleViewBook).toHaveBeenCalled();
	});
});
