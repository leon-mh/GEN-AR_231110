let h = 0

function setup() {
	createCanvas(895, 1280, document.getElementById('canvas-ar')) // poster aspect
	pixelDensity(1) // prevent 200+ PPI lag
	colorMode(HSL)
}

function draw() {
	let x = noise(frameCount * .007) * width
	let y = noise(frameCount * .005) * height
	// let fc = h + sin(frameCount * .1) * 40

	// let c = get(width/2,height/2,100,100)
	fill(frameCount%255, 50, 50)
	stroke(255)
	
	translate(x, y)
	rotate(radians(frameCount * 1.1))
	
	rect(0, 0, 300, 3)
	// circle(0,0,300,300)
}

function mousePressed() {
	clear()
	h = random(360)
}