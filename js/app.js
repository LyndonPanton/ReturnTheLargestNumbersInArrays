"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	// Edit me
	let arr = [[10, 20, 30, 40], [16, 256, 4, 64], [25, 16, 9, 4], [27, 8, 125, 64]];

	function largest(array) {
		let largest = [];

		array.forEach(function(sub) {
			// largest.push(Math.max(...sub));
			
			let subMax;

			for (let i = 0; i < sub.length; i++) {
				if (i === 0) {
					subMax = sub[i];
				} else if (sub[i] > subMax) {
					subMax = sub[i];
				}
			}

			largest.push(subMax);
		});

		// console.log(largest);
	}

	largest(arr);
};