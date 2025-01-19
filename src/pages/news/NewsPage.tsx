import React from "react";
// import NewsList from "./NewsList";
import useNews from "../../api/useNews";
import { Link } from "react-router-dom";
import { shortenString } from "../../utils";

const NewsPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50" dir="rtl">
			<header className="bg-white shadow-md sticky top-0 z-10">
				<div className="p-4 max-w-7xl mx-auto flex justify-between items-center">
					<h1 className="text-2xl font-bold text-gray-900">الأخبار</h1>
				</div>
			</header>

			<main>
				<News />
			</main>
		</div>
	);
};

function News() {
	const { getQuery } = useNews();
	const { data, isLoading } = getQuery;

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (!data) {
		return <h1>There are no news to view</h1>;
	}
	return (
		<section className="flex items-center justify-center min-h-auto py-12 px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
				{data.map((news) => (
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
}

export default NewsPage;
