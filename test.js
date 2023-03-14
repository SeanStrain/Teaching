var canvasEl  = document.querySelector('canvas')
var context   = canvasEl.getContext('2d')
canvasEl.width  = innerWidth
canvasEl.height = innerHeight

addEventListener("click", (event) =>
{
	let x = event.clientX
	let y = event.clientY	
	console.log(x,y)

	circles.push([x,y])
})

var circles = []
var ticks = 0
function animate()
{
	ticks++
	context.fillStyle = `black`
	context.fillRect(0, 0, innerWidth, innerHeight)

    animationId = requestAnimationFrame(animate)
	circles.forEach(circle => {
		let x = circle[0]
		let y = circle[1]

		context.fillStyle = `hsl(${ticks}, 50%, 50%)`
		context.beginPath()
		context.arc(x, y, 10, 0, Math.PI * 2)
		context.closePath()
		context.fill()
	})
}

animate()