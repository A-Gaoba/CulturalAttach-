import React from "react";
import { News } from "../../../types";

interface NewsListProps {
	news: News[];
	onEdit: (news: News) => void;
	onDelete: (_id: string) => void;
}

const NewsList: React.FC<NewsListProps> = ({ news, onEdit, onDelete }) => {
	return (
		<div>
			{news.map((item) => (
				<div key={item._id} className="mb-4 p-4 border rounded shadow">
					<h2 className="text-xl font-bold">{item.title}</h2>
					<p className="text-gray-700">{item.description}</p>
					<div className="mt-2">
						<button
							onClick={() => onEdit(item)}
							className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
						>
							تعديل
						</button>
						<button
							onClick={() => onDelete(item._id)}
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							حذف
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default NewsList;
