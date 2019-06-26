"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	// Edit me
	let arr = [[10, 20, 30, 40], [16, 256, 4, 64], [25, 16, 9, 4], [27, 8, 125, 64]];

	function display(largest) {
		document.getElementById("arrays-count").textContent = largest.length;
		document.getElementById("numbers-max").textContent = "";

		for (let i = 0; i < largest.length; i++) {
			if (i === (largest.length - 1)) {
				document.getElementById("numbers-max").textContent = document.getElementById("numbers-max").textContent + largest[i];
			} else {
				document.getElementById("numbers-max").textContent = document.getElementById("numbers-max").textContent + largest[i] + ", ";
			}
		}
	}

	function largest(array) {
		let largest = [];

		array.forEach(function(sub) {
			// Method I
			// largest.push(Math.max(...sub));

			// Method II
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

		display(largest);
	}

	largest(arr);
};