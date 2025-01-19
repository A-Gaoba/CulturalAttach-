import React from "react";
import Contact from "../../components/Contact";
import HeroSlider from "./Hero";
import { useTranslation } from "react-i18next";
import NewsList from "../news/NewsList";
import { Link } from "react-router-dom";
// import useNews from "../../api/useNews";
// import { getDataByLastDays, shortenString } from "../../utils";

const HomePage: React.FC = () => {
	const { t } = useTranslation();
	const slides = [
		{
			id: 1,
			image: "/hero3.jpg",
			title: "OLD SANA'A",
			description: "",
		},
		{
			id: 2,
			image: "/hero2.jpg",
			title: "SHIBAM",
			description: "",
		},
		{
			id: 4,
			image: "/hero4.jpg",
			title: "TAWILA TANKS",
			description: "",
		},
		{
			id: 5,
			image: "/hero5.jpg",
			title: "SOCOTRA ISLAND",
			description: "",
		},
		{
			id: 6,
			image: "/hero9.jpg",
			title: "DRAGON BLOOD TREE",
			description: "",
		},
		{
			id: 7,
			image: "/hero6.jpg",
			title: "DAR ALHAJAR",
			description: "",
		},
		{
			id: 8,
			image: "/hero7.jpg",
			title: "TAIZ CASTLE",
			description: "",
		},
		{
			id: 9,
			image: "/hero8.jpg",
			title: "LITTLE BIG BIN",
			description: "",
		},
		{
			id: 10,
			image: "/hero10.webp",
			title: "BILQIS' THRONE",
			description: "",
		},
		{
			id: 11,
			image: "/hero11.jpg",
			title: "SHAHARAH BRIDGE",
			description: "",
		},
	];

	return (
		<div>
			<HeroSlider slides={slides} />

			<div>
				<NewsList />
				<div className="text-center m-2">
					<Link
						to="/news"
						className="inline-block bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition"
					>
						{t("hero.read_more")}
					</Link>
				</div>
			</div>

			<Contact />
		</div>
	);
};

// function BreakingNews() {
// 	const { getQuery } = useNews();
// 	const { data: news, isLoading, isError } = getQuery;
// 	const lastNews = getDataByLastDays(news, 7);
// 	if (isLoading) {
// 		return <h1>Loading...</h1>;
// 	}

// 	if (isError) {
// 		return <h1>Server error</h1>;
// 	}
// 	return (
// 		<div className="flex gap-10 px-20">
// 			<section className="flex items-center justify-center min-h-auto py-12 px-4">
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
// 					{lastNews.map((news) => (
// 						<div
// 							key={news._id}
// 							className="flex flex-col bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
// 						>
// 							<Link to={`/news/${news._id}`} className="group">
// 								{/* News Image */}
// 								<img src="/news/news3.jpg" alt={news.title} className="rounded-t-lg w-full h-48 object-cover" />
// 								<div className="p-4">
// 									{/* News Title */}
// 									<h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
// 										{news.title}
// 									</h3>
// 									{/* News Description */}
// 									<p className="text-gray-600 mt-2">{shortenString(news.description)}</p>
// 								</div>
// 							</Link>
// 						</div>
// 					))}
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

export default HomePage;
