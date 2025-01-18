import React from "react";
import useNews from "../../api/useNews";
// import Fuse from "fuse.js";
import { Link } from "react-router-dom";

const NewsDetails: React.FC = () => {
	const { getByIdQuery, getQuery } = useNews();
	const { data: news } = getByIdQuery;
	
	// const [relatedNews, setRelatedNews] = useState([]);
	// const fuseOptions = {
	// 	keys: ["title"],
	// 	threshold: 0.3, // Adjust the threshold for more strict matching
	// 	distance: 100, // Adjust the distance for more strict matching
	// 	includeScore: true, // Include the score in the results
	// };
	// useEffect(() => {
	// 	if (getQuery.data) {
	// 		const fuse = new Fuse(getByIdQuery.data, fuseOptions);
	// 		const result = fuse.search(news[0].title).map(({ item }) => item);
	// 		setRelatedNews(result);
	// 	}
	// }, []);


	if (!news) {
		return <div className="flex justify-center items-center h-screen text-gray-700 text-lg">الخبر غير موجود.</div>;
	}

	return (
		<div dir="rtl" className="container mx-auto px-6 py-10 lg:flex lg:gap-12">
			{/* Main Article Section */}
			<main className="lg:flex-1 bg-white p-6 rounded-lg shadow-lg">
				<img src="/news/news3.jpg" alt={news[0].title} className="rounded-lg mb-6 w-full h-80 object-cover shadow-md" />
				<h1 className="text-3xl font-extrabold text-gray-900 mb-4">{news[0].title}</h1>
				<p className="text-gray-700 leading-loose whitespace-pre-line break-words">{news[0].description}</p>
			</main>

			{/* Related News Section */}
			<aside className="mt-12 lg:mt-0 lg:w-1/3">
				<h2 className="text-2xl font-bold text-gray-900 mb-6">أخبار ذات صلة</h2>
				<ul className="space-y-6">
					{getQuery.data.map((item) => (
						<li key={item._id} className="flex items-start gap-4 border p-2">
							<img src="/news/news3.jpg" alt={item.title} className="w-16 h-16 object-cover rounded-lg shadow-md" />
							<Link
								to={`/news/${item._id}`}
								className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
};

export default NewsDetails;
