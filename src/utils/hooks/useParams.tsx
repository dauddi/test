import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
	id: string;
}

const useParams = (): Params => {
	const router = useRouter();
	return router.query as Params;
};

export default useParams;
