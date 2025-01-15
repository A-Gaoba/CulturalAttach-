import React, { useState, useEffect } from "react";
import { News } from "../../../types";

interface NewsFormProps {
	onSubmit: (news: Omit<News, "id">) => void;
	editingNews?: News | null;
	onUpdate?: (news: News) => void;
	onCancelEdit?: () => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit, editingNews, onUpdate, onCancelEdit }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (editingNews) {
			setTitle(editingNews.title);
			setDescription(editingNews.description);
		}
	}, [editingNews]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (editingNews) {
			onUpdate!({ ...editingNews, title, description });
		} else {
			onSubmit({ title, description });
		}
		setTitle("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">العنوان</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">الوصف</label>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					{editingNews ? "تعديل" : "اضافة"}
				</button>
				{editingNews && (
					<button
						type="button"
						onClick={onCancelEdit}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						الغاء
					</button>
				)}
			</div>
		</form>
	);
};

export default NewsForm;
