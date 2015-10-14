import classActs from '../index';



document.addEventListener('DOMContentLoaded', e=>{

	[...document.querySelectorAll('.has-class')]
		.map(classActs.remove('has-class'))
		.map(classActs.add('new-class'))
		.map(elm=>elm.addEventListener('click', ()=>{
			classActs.toggle('was-clicked')( elm );
		}));


});
