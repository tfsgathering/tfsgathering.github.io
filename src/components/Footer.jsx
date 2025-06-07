import { Link } from "react-router-dom";


function Footer() {
	return (
		<footer>
		<hr />
		&copy; <strong>TFS Gathering</strong>. All rights reserved.
		<div className="block block__main">
			<div className="block__title">TFS Gathering</div>
			<Link to="/join">Click here</Link> to join the Discord server now! To contact the owner, you can also write to tfsgathering at gmail dot com.
		</div>
		<div className="blocks">
			<div className="block">
				<div className="block__title">Game Links</div>
				<ul>
					<li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.AXgamesoft.TurbopropFS">Play Store</a></li>
					<li><a target="_blank" href="https://apps.apple.com/us/app/turboprop-flight-simulator/id1353498474">App Store</a></li>
					<li><a target="_blank" href="https://youtube.com/@AXgamesoft.Official">Youtube</a></li>
					<li><a target="_blank" href=""></a></li>
				</ul>
			</div>
			<div className="block">
				<div className="block__title">GitHub Repos</div>
				<ul>
					<li><a target="_blank" href="https://github.com/tfsgathering/tfsgathering.github.io">Website</a></li>
					<li><a target="_blank" href="https://github.com/tfsgathering/hotfs">Handbook</a></li>
				</ul>
			</div>
			<div className="block">
				<div className="block__title">Pages</div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/rules">Rules</Link></li>
					<li><Link to="/change">Change-log</Link></li>
				</ul>
			</div>
		</div>
		</footer>
	)
}

export default Footer;
