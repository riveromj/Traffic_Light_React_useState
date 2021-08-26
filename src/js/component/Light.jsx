import React from "react";
import PropTypes from "prop-types";

const Light = ({ color, active, setActive }) => {
	return (
		<div className="text-center mt-5">
			<div
				className={color === active ? color + " selected" : color}
				onClick={() => setActive(color)}></div>
		</div>
	);
};

Light.propTypes = {
	color: PropTypes.string, //trae el color de la luz
	active: PropTypes.string, //por defecto estan todas apagadas
	setActive: PropTypes.string //indica el color activo
};
export default Light;
///cuando haces onClick colocas en la varible de estado quien esta encendido.
//selected es mi clase que enciende la luz
