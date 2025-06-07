import { Link } from "react-router-dom";


function Navbar() {
	return (
		<nav>
		<img
		src="img/plane_blue.png"
		alt="Plane in logo of TFS Gathering" />
		<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/rules">Rules</Link></li>
		<li><Link to="/change">Change-log</Link></li>
		<li><Link to="/join">Join</Link></li>
		</ul>
		</nav>
	)
}

export default Navbar;
