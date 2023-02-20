import Home from "@pages";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import mockRouter from "next-router-mock";
import { server } from "../../mocks/server";
import "@testing-library/jest-dom/extend-expect";

// Establish API mocking before all tests.
beforeAll(() => {
	server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe("Home page / Books page", () => {
	it("should render", async () => {
		const { getByText } = await render(
			<RouterContext.Provider value={mockRouter}>
				<Home />
			</RouterContext.Provider>
		);
		await waitFor(() =>
			expect(getByText("Books App")).toHaveTextContent("Books")
		);
	});

	it("should render books container", async () => {
		const { getByTestId } = await render(
			<RouterContext.Provider value={mockRouter}>
				<Home />
			</RouterContext.Provider>
		);
		await waitFor(() =>
			expect(getByTestId("books-container")).toBeInTheDocument()
		);
	});

	it("should render books list", async () => {
		const { getByTestId } = await render(
			<RouterContext.Provider value={mockRouter}>
				<Home />
			</RouterContext.Provider>
		);
		await waitFor(() => expect(getByTestId("books-list")).toBeInTheDocument());
	});

	it("should render books list with 2 books", async () => {
		const { getAllByTestId } = await render(
			<RouterContext.Provider value={mockRouter}>
				<Home />
			</RouterContext.Provider>
		);
		await waitFor(() => expect(getAllByTestId("book")).toHaveLength(2));
	});

	it("should render books list with 2 books each with a title and author", async () => {
		const { getAllByTestId } = await render(
			<RouterContext.Provider value={mockRouter}>
				<Home />
			</RouterContext.Provider>
		);
		await waitFor(() => expect(getAllByTestId("book")).toHaveLength(2));
		await waitFor(() => expect(getAllByTestId("book-title")).toHaveLength(2));
		await waitFor(() => expect(getAllByTestId("book-author")).toHaveLength(2));
	});
});
