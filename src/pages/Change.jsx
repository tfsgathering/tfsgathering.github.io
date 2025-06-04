import ChangeEntry from "../components/ChangeEntry";
import Banner from "../components/Banner";


function Change() {
	return (
		<>
		
		<Banner
		path="img/banner_changelog.png" />
		
		<ChangeEntry
		date="28 May, 2024"
		head="JooJoo joins the Control Tower">
		JooJoo, an active member of the server has joined the Control Tower and now is responsible for maintaining order in and around the server. With their arrival, the server will benifit from a broader range of perspective and shared responsibility, as until now, moderation was handled solely by Naman.
		</ChangeEntry>
		
		<ChangeEntry
		date="12 May, 2023"
		head="TFS Gathering is created">
		TFS Gathering has been created by Naman to serve as a community for the players of the game Turboprop Flight Simulator created by AXgamesoft. The lack of an official and accessible community platform for the game motivates creation of TFS Gathering.
		</ChangeEntry>
		</>
	)
}
export default Change;
