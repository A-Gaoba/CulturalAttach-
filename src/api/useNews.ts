import { toast } from "react-toastify";
import { News } from "../types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import myAxios from "./myAxios";
import { useParams } from "react-router-dom";

export const fetchNews = async (): Promise<News[]> => {
	const response = await myAxios.get("/news");
	return response.data;
};

export const createNews = async (news: Omit<News, "id">): Promise<News> => {
	const response = await myAxios.post("/news", news);
	return response.data;
};

export const getNewsById = async (id: string | undefined) => {
	const response = await myAxios.get(`/news/${id}`);
	return response.data;
};

export const updateNews = async (news: News): Promise<News> => {
	const response = await myAxios.put(`/news/${news._id}`, news);
	return response.data;
};

export const deleteNews = async (_id: string | undefined): Promise<void> => {
	await myAxios.delete(`/news/${_id}`);
};

export default function useNews() {
	const queryClient = useQueryClient();

	const getQuery = useQuery({
		queryKey: ["news"],
		queryFn: fetchNews,
	});

	const createMutation = useMutation({
		mutationFn: createNews,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["news"] });
			toast.success("تم اضافة الخبر بنجاح");
		},
		onError: (error) => {
			console.log(error);
			toast.error("فشل في اضافة الخبر");
		},
	});

	const { id } = useParams();
	const getByIdQuery = useQuery({
		queryKey: ["news"],
		queryFn: () => getNewsById(id),
	});

	const updateMutation = useMutation({
		mutationFn: updateNews,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["news"] });
			toast.success("تم تحديث الخبر بنجاح");
		},
		onError: (error) => {
			console.log(error);
			toast.error("فشل في تحديث الخبر");
		},
	});

	const deleteMutation = useMutation({
		mutationFn: deleteNews,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["news"] });
			toast.success("تم حذف الخبر بنجاح");
		},
		onError: (error) => {
			console.log(error);
			toast.error("فشل في حذف الخبر");
		},
	});

	return {
		getQuery,
		getByIdQuery,
		createMutation,
		updateMutation,
		deleteMutation,
	};
}
