import { FormEvent, useState } from "react";
import myAxios from "../../api/myAxios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [password, setPassword] = useState("");
	const [_, setAuthState] = useLocalStorage("token", "");
	const navigate = useNavigate();

	const { mutate } = useMutation({
		mutationFn: async (password: string) => {
			const res = await myAxios.post("/admin/login", { password });
			return res.data;
		},
		onSuccess: (data) => {
			setAuthState(data.token);
			navigate("/admin");
		},
		onError: (error) => {
			console.log(error);
			toast.error("فشل في تسجيل الدخول");
		},
	});
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		mutate(password);
	}
	return (
		<div className="bg-gray-400 w-full min-h-[400px] flex justify-center items-center">
			<form onSubmit={handleSubmit}>
				<input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
			</form>
		</div>
	);
}
