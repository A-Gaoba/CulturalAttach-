import React from "react";
import Contact from "../../components/Contact";
import HeroSlider from "./Hero";
import { useTranslation } from "react-i18next";
import NewsList from "../news/NewsList";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import myAxios from "../../api/myAxios";
import { shortenString } from "../../utils";
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

			<div className="flex justify-center items-center md:flex-row flex-col-reverse ">
				<main className="w-3/4 p-4">
					<NewsList />
					<div className="text-center m-2">
						<Link
							to="/news"
							className="inline-block bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition"
						>
							{t("hero.read_more")}
						</Link>
					</div>
				</main>

				<aside className="md:w-1/4 p-4 ">
					<ImportantNewsCard />
				</aside>
			</div>

			<Contact />
		</div>
	);
};

interface NewsItem {
	_id: string;
	title: string;
	description: string;
	images?: string[];
	createdAt?: string;
	updatedAt?: string;
	isImportant?: boolean;
}

const ImportantNewsCard = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["news", "importnat"],
		queryFn: async () => {
			const res = await myAxios.get("/news/important");
			return res.data as NewsItem[];
		},
	});

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (isError) {
		return <h1>Server error</h1>;
	}

	return (
		<div>
			<div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
				<h1 className="font-bold text-xl text-center p-5">أخبار هامة</h1>
				{data &&
					data.map((news) => {
						return (
							<div className="border border-black rounded-md my-2">
								<Link to={`/news/${news._id}`} className="group">
									<img
										src="/news/news3.jpg"
										alt={news.title}
										className="rounded-t-lg w-full h-48 object-cover"
									/>
									<div className="p-4">
										<h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
											{news.title}
										</h3>
										<p className="text-gray-600 mt-2">{shortenString(news.description)}</p>
									</div>
								</Link>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default HomePage;
