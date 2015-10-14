export default function(className) {

	return elm => {
		elm.classList.toggle(className);
		return elm;
	}

}
