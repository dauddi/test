import useBooks from "@utils/hooks/useBooks";
import useParams from "@utils/hooks/useParams";
import { IBookType } from "@utils/types/types";
import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BookDetails = () => {
	const { bookID } = useParams();
	const router = useRouter();
	const [book, setBook] = React.useState<IBookType | null>(null);
	const { fetchBookByID, data, isLoading, error } = useBooks();

	React.useEffect(() => {
		if (!bookID) return;
		fetchBookByID(Array.isArray(bookID) ? bookID[0] : bookID);
	}, [bookID]);

	React.useEffect(() => {
		if (!data) return;
		setBook(data[0]);
	}, [data]);

	const handleBack = () => {
		router.back();
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {JSON.stringify(error)}</div>;

	return (
		<div>
			<p
				onClick={handleBack}
				className="flex items-center gap-3 font-semibold text-gray-700 hover:cursor-pointer "
			>
				<span>
					<BiArrowBack />
				</span>
				back
			</p>
			<div className="flex flex-col">
				<div className="w-full mt-4 p-2">
					<h3 className="font-medium text-xl text-green-800">{book?.title}</h3>
					<p className="text-sm">
						<i className="text-gray-500 text-xs pr-2">by</i>
						{book?.author}
					</p>

					<p className="text-sm">
						<i className="text-gray-500 text-xs pr-2">year</i>
						{book?.publication_date}
					</p>

					<p className="text-sm">
						<i className="text-gray-500 text-xs pr-2">Published by</i>
						{book?.publisher}
					</p>
				</div>

				<div className="w-full my-4 p-2">
					<h3 className="font-medium text-lg text-gray-800 mb-2">Synopsis</h3>
					<p className="text-gray-500">{book?.synopsis}</p>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
