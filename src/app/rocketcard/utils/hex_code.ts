function generateHEXDigit(max=15):string {
	let digit = String(Math.floor(Math.random() * (max + 1)))
	console.log(digit)

	switch(digit) {
		case '10':
			digit = 'A'
		  break
		case '11':
			digit = 'B'
		  break
		case '12':
			digit = 'C'
  		break
		case '13':
			digit = 'D'
		  break
	  case '14':
			digit = 'E'
  		break
		case '15':
			digit = 'F'
		  break
		default:
			digit = digit.toString()
		  break
	}

	return digit
}

export function generateHEXColor():string {
	const color1 = generateHEXDigit()
	const color2 = generateHEXDigit()
	const color3 = generateHEXDigit()
	const color4 = generateHEXDigit()
	const color5 = generateHEXDigit()
	const color6 = generateHEXDigit()

	return `#${color1}${color2}${color3}${color4}${color5}${color6}`
}
