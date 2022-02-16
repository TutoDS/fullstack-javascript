let shipVelocity = 0;

const distance = document.getElementById('distance');
const conversion = document.getElementById('conversion');

let chosenUnity;
let convertedValue;

conversion.addEventListener('change', (evt) => {
	evt.preventDefault();

	switch (conversion.value) {
		case '1':
			chosenUnity = 'Parsec';
			convertedValue = distance.value * 0.306601;
			break;

		case '2':
			chosenUnity = 'Unidade Astronómica';
			convertedValue = distance.value * 63241.1;
			break;

		case '3':
			chosenUnity = 'Quilômetros';
			convertedValue = distance.value * 9.5 * Math.pow(10, 12);
			break;

		default:
			chosenUnity = 'Opção inválida';
			convertedValue = 0;
			break;
	}

	document.getElementById(
		'content'
	).innerHTML = `Distância em anos de luz: ${distance.value}; Opção de conversão: ${chosenUnity}; Resultado: ${convertedValue}`;
});
