# CSS Class Acts

Lamda function factories for adding, removing, & toggling a class on HTML Elements.


	import addClass from 'css-class-acts/add';
	import removeClass from 'css-class-acts/remove';
	import toggleClass from 'css-class-acts/toggle';

	[].slice.call(document.querySelector('p.class1'))
		.map( removeClass('class1') )
		.map( addClass('class2') )
		.map( toggleClass('class3') );



## Import All

	import classActs from 'css-class-acts';

	// classActs looks like: { add(), remove(), toggle() }

	[].slice.call( document.querySelector('p.class1') )
		.map( classActs.toggle('class1') );

