import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NewsForm from "./components/NewsForm";
import NewsList from "./components/NewsList";
import useNews from "../../api/useNews";
import { News } from "../../types";

const Admin: React.FC = () => {
	const { getQuery, createMutation, updateMutation, deleteMutation } = useNews();
	const [editingNews, setEditingNews] = useState<News | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/");
		}
	}, [navigate]);

	const handleCreateNews = (newNews: Omit<News, "id">) => {
		createMutation.mutate(newNews);
	};

	const handleUpdateNews = (updatedNews: News) => {
		updateMutation.mutate(updatedNews);
	};

	const handleDeleteNews = (_id: string | undefined) => {
		deleteMutation.mutate(_id);
	};

	if (getQuery.isLoading) return <div>Loading...</div>;
	if (getQuery.isError) return <div>Error loading news</div>;

	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-1 p-4">
				<NewsForm
					onSubmit={handleCreateNews}
					editingNews={editingNews}
					onUpdate={handleUpdateNews}
					onCancelEdit={() => setEditingNews(null)}
				/>
				<NewsList news={getQuery.data || []} onEdit={setEditingNews} onDelete={handleDeleteNews} />
			</div>
		</div>
	);
};

export default Admin;
