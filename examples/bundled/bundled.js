// import classActs from 'class-acts';

import classActs from '../../index.js';


document.addEventListener('DOMContentLoaded', ()=> {

	let targets = [ ...document.querySelectorAll('.demo') ],
		adder = document.querySelector('#adder'),
		remover = document.querySelector('#remover'),
		toggler = document.querySelector('#toggler'),
		evenToggler = document.querySelector('#evenToggler');


	// code for adding class
	adder.addEventListener('click', function() {
		targets.map( classActs.add('classified') );
	});


	// code for removing class
	remover.addEventListener('click', function() {
		targets.map( classActs.remove('classified') );
	});


	// code for toggling class
	toggler.addEventListener('click', function() {
		targets.map( classActs.toggle('classified') );
	});


	// code for toggling even classes
	evenToggler.addEventListener('click', function() {
		targets
			.filter( classActs.contains('even') )
			.map( classActs.toggle('classified') );
	});








});
