import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "./newsData";
import useNews from "../../api/useNews";

function shortenString(longString: string) {
	if (longString.length <= 100) {
		return longString;
	} else {
		return longString.substring(0, 100) + "...";
	}
}

const NewsList: React.FC = () => {
	const { getQuery } = useNews();
	const { data, isLoading } = getQuery;

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (!data) {
		return <h1>There are no news to view</h1>;
	}

	const limitedNews = data.slice(0, 3);

	return (
		<section className="flex items-center justify-center min-h-auto py-12 px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
				{limitedNews.map((news) => (
					<div
						key={news._id}
						className="flex flex-col bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
					>
						<Link to={`/news/${news._id}`} className="group">
							{/* News Image */}
							<img src="/news/news3.jpg" alt={news.title} className="rounded-t-lg w-full h-48 object-cover" />
							<div className="p-4">
								{/* News Title */}
								<h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
									{news.title}
								</h3>
								{/* News Description */}
								<p className="text-gray-600 mt-2">{shortenString(news.description)}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default NewsList;
