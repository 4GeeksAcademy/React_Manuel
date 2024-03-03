import React from "react";
import Navbar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
		 <Navbar/>
			<div className="container">
				<div className="containerJombotron">
					<Jumbotron/>
				</div>
				<div className="row">
				<Card/><Card/><Card/><Card/>
				</div>	
			</div>
		</div>
	);
};

export default Home;
