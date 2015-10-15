import test from 'tape';
import jsdom from 'jsdom';
import classActs from '../index.js';






test('attr-boy tests', t => {
	t.plan(6);

	jsdom.env(`<p>hi</p><p>bye</p>`, (err, window)=>{
		var document = window.document;

		let qsa = selector => [...document.querySelectorAll(selector)];

		// add class to all
		qsa('p').map( classActs.add('my-class') );
		t.equal(document.querySelectorAll('p.my-class').length, 2, `adds class in bulk`);

		// remove class on first one
		qsa('p').slice(0,1).map( classActs.remove('my-class') );
		t.equal(qsa('p.my-class').length, 1, `removes class`);


		// toggle class
		qsa('p').map( classActs.toggle('my-class') );
		t.equal( qsa('p.my-class').length, 1, `toggles class on`);
		t.equal( qsa('p:not(.my-class)').length, 1, `toggles class off`);
		t.equal( true, qsa('p:first-child')[0].classList.contains('my-class'), 'toggle correctly' );


		// filters via class contains
		t.equal( qsa('p').filter( classActs.contains('my-class') ).length, 1, 'filters via class');



	});

});

