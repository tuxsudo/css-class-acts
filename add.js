export default function(className) {

	return elm=>{
		elm.classList.add(className);
		return elm;
	}

}
