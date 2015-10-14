export default function(className) {

	return elm => {
		elm.classList.remove(className);
		return elm;
	}

}
