import React, { useState } from "react";

import Light from "./Light.jsx";

const Home = () => {
	const colors = ["red", "yellow", "green"];
	const [active, setActive] = useState("");
	return (
		<div className="text-center mt-5">
			<h1>Traffic</h1>
			{colors.map((color, i) => {
				return (
					<Light
						key={i}
						color={color}
						active={active}
						setActive={setActive}
					/>
				);
			})}
		</div>
	);
};

export default Home;
