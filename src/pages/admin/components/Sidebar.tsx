import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/"); // Navigate to the home page
	};

	return (
		<div className="w-fit bg-red-500 text-white p-4">
			<ul>
				<li className="mb-4">
					<a href="#" className="text-white bg-slate-900 px-4 py-2 hover:bg-slate-700">
						ألاخبار
					</a>
				</li>
				<li className="mb-4">
					<button onClick={handleLogout} className="text-white bg-slate-900 px-4 py-2 hover:bg-slate-700">
						خروج
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
