const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');


// Set canvas size
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// Number of rows and columns
const rows = 3;
const cols = 3;

// Square size and gap between squares
const squareSize = 10;
const gap = 2;

// Animation parameters
let angle = 360;
const spinSpeed = 0.01;
const retractSpeed = 0.5;
const maxRetract = 80;
let mouseX = 0;
let mouseY = 0;
canvas.addEventListener('mousemove', function (event) {
	const rect = canvas.getBoundingClientRect();
	mouseX = event.clientX - rect.left;
	mouseY = event.clientY - rect.top;


});


function draw() {
	// Clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			// Calculate position
			const x = (canvas.width - (cols * (squareSize + gap) - gap)) / 2 + j * (squareSize + gap);
			const y = (canvas.height - (rows * (squareSize + gap) - gap)) / 2 + i * (squareSize + gap);

			// Calculate angle based on position
			const distanceToCenter = Math.sqrt(Math.pow(canvas.width / 2 - x, 2) + Math.pow(canvas.height / 2 - y, 2));
			const retractAmount = Math.min(maxRetract, distanceToCenter);
			const retractAngle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);

			// Calculate movement
			const dx = Math.cos(angle + retractAngle) * retractAmount * retractSpeed;
			const dy = Math.sin(angle + retractAngle) * retractAmount * retractSpeed;

			// Draw square
			const isHovered = mouseX >= x + dx && mouseX <= x + dx + squareSize && mouseY >= y + dy && mouseY <= y + dy + squareSize;

			ctx.fillStyle = isHovered? '#36868f' : '#5fc75d' ;
			ctx.fillRect(x + dx, y + dy, squareSize, squareSize);
		}
	}

	// Update angle for spinning effect
	angle += spinSpeed;

	// Request animation frame
	requestAnimationFrame(draw);
}

// Start animation
draw();
canvas.addEventListener('click', function () {
	// Redirect to home page
	window.location.href = '/'; // Replace 'home.html' with the actual URL of your home page
});

