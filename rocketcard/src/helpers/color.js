export function generateColor(color=255) {
	const color1 = Math.floor(Math.random() * (color + 1))
	const color2 = Math.floor(Math.random() * (color + 1))
	const color3 = Math.floor(Math.random() * (color + 1))

	const finalColor = `rgba(${color1}, ${color2}, ${color3}, 1)`

	return finalColor;
}
