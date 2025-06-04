import Banner from "../components/Banner";


function Home() {
	return (
		<>
		<Banner
		path="img/banner_welcome.png" />
		<h2>About</h2>
		<p>We are a Discord Server ran for and by the players of Turboprop Flight Simulator, a single-player offline flight simulator game created by AXgamesoft. Currently, the server consists of over 200 members &mdash; but that is the product of priceless contributions from all members and a journey of over 2 years now.</p>
		<h2>HoTFS</h2>
		<p>We have begun working on the development of the HANDBOOK of Turboprop Flight Simulator, which in its final form will be an open-access document consisting of information about all aspects of the game including airports, vehicles, aircrafts, islands, systems, and more.</p>
		<p>This however is a group project; and demands input and contribution of the games community. Therefore, we take this opportunity to invite you to join us in the creation of this handbook. All development is taking place in our Discord server. Join us to contribute!</p>
		<h2>So what are you waiting for?</h2>
		<p>
		Join us for endless fun and be a part of a great, welcoming, and lovely community. We will be waiting for you &mdash; our community tree is asking to be watered by you!
		</p>
		<img src="img/tree.png" alt="Tree" height="300px" />
		</>
	)
}

export default Home;
