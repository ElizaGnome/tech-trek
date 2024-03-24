

document.addEventListener('DOMContentLoaded', function () {
	const container = document.getElementById('rain-container');
	const squares = [];

	// Function to create a square
	function createSquare() {
		console.log("RAINNNNNNNN")
		const square = document.createElement('div');
		square.className = 'square';
		square.style.left = `${Math.random() * window.innerWidth}px`;
		square.style.top = `${Math.random() * window.innerHeight}px`;
		square.style.animationDuration = `${Math.random() * 2 + 1}s`;
		container.appendChild(square);
		squares.push(square);
	}

	// Function to animate squares
	function animateSquares() {
		squares.forEach(square => {
			square.style.top = `${parseInt(square.style.top) + 10}px`;
			if (parseInt(square.style.top) > window.innerHeight) {
				square.style.top = '0px';
				square.style.left = `${Math.random() * window.innerWidth}px`;
			}
		});
	}

	// Function to orient squares towards cursor
	function orientSquares(e) {

		//lets add a sort of drift
		// Let's add a sort of drift
		const driftSpeed = 0.00001; // Reduced drift speed for a less extreme effect

		squares.forEach(square => {
			const currentX = parseInt(square.style.left);
			const currentY = parseInt(square.style.top);

			const targetX = e.clientX;
			const targetY = e.clientY;

			const newX = currentX + (targetX - currentX) * driftSpeed;
			const newY = currentY + (targetY - currentY) * driftSpeed;

			square.style.left = `${newX}px`;
			square.style.top = `${newY}px`;

			const scaleFactor = 2;

			const dx = targetX - newX;
			const dy = targetY - newY;
			const angle = Math.atan2(dy, dx) * scaleFactor;
			square.style.transform = `rotate(${angle}rad)`;
		});

	}

	// Create initial squares
	for (let i = 0; i < 100; i++) {
		createSquare();
	}

	// Animate squares
	setInterval(animateSquares, 100);

	// Orient squares towards cursor
	document.addEventListener('mousemove', orientSquares);
});

