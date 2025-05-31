import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Join() {
	const navigate = useNavigate();

	useEffect(() => {
		window.open("https://discord.gg/AFqs4SNyHt", "_blank", "noopener,noreferrer");
		navigate("/", { replace: true });
	}, [navigate]);

	return null;
}

export default Join;
