import React from "react";
import useNews from "../../api/useNews";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import myAxios from "../../api/myAxios";

const NewsDetails: React.FC = () => {
	const { id } = useParams();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["news", id],
		queryFn: async () => {
			const res = await myAxios.get(`/news/${id}`);
			return res.data;
		},
	});

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (isError) {
		return <h1>Server error</h1>;
	}

	return (
		<div dir="rtl" className="container mx-auto px-6 py-10 lg:flex lg:gap-12">
			{/* Main Article Section */}
			<main className="lg:flex-1 bg-white p-6 rounded-lg shadow-lg">
				<img src="/news/news3.jpg" alt={data.title} className="rounded-lg mb-6 w-full h-80 object-cover shadow-md" />
				<h1 className="text-3xl font-extrabold text-gray-900 mb-4">{data.title}</h1>
				<p className="text-gray-700 leading-loose whitespace-pre-line break-words">{data.description}</p>
			</main>

			{/* Related News Section */}
			<RelatedNews />
		</div>
	);
};

function RelatedNews() {
	const { getQuery } = useNews();
	const { data: allNews, isLoading, isError } = getQuery;
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (isError) {
		return <h1>Server error</h1>;
	}
	return (
		<aside className="mt-12 lg:mt-0 lg:w-1/3">
			<h2 className="text-2xl font-bold text-gray-900 mb-6">أخبار ذات صلة</h2>
			<ul className="space-y-6">
				{allNews &&
					allNews.map((item) => (
						<li
							key={item._id}
							className="border p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
						>
							<Link to={`/news/${item._id}`} className="flex items-start gap-4">
								<img
									src="/news/news3.jpg"
									alt={item.title}
									className="w-16 h-16 object-cover rounded-lg shadow-md"
								/>
								<div>
									<h3 className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
										{item.title}
									</h3>
								</div>
							</Link>
						</li>
					))}
			</ul>
		</aside>
	);
}

export default NewsDetails;
