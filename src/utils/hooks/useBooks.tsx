import { endpoints } from "@utils/constants";
import { IBookType } from "@utils/types/types";
import axios from "axios";
import { useState } from "react";

const fetcher = (url: string) => axios.get(url).then((r) => r.data);

const useBooks = () => {
	const [data, setData] = useState<IBookType[] | []>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<unknown | null>(null);

	const fetchBooks = async () => {
		setIsLoading(true);
		try {
			const response = await fetcher(endpoints.books);
			setData(response.data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchBookByID = async (id: number | string) => {
		setIsLoading(true);
		try {
			const response = await fetcher(`${endpoints.books}?id=${id}`);
			setData(response.data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		data,
		error,
		isLoading,
		fetchBooks,
		fetchBookByID,
	};
};

export default useBooks;
