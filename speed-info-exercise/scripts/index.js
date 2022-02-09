let shipVelocity = 0;

const pilotName = document.getElementById('pilotName');
const velocityInput = document.getElementById('velocity');

velocityInput.addEventListener('change', (evt) => {
	evt.preventDefault();

	shipVelocity = velocityInput.value;

	confirm(`Pretende acelere a nave para ${shipVelocity}?`);

	if (shipVelocity <= 0) {
		document.getElementById('content').innerHTML =
			'Nave parada. Considere partir e aumentar a velocidade!';
	} else if (shipVelocity > 0 && shipVelocity < 40) {
		document.getElementById('content').innerHTML =
			'A velocidade é baixa! Podemos aumentar um pouco.';
	} else if (shipVelocity >= 40 && shipVelocity < 80) {
		document.getElementById('content').innerHTML =
			'Vai a uma boa velocidade! Recomendamos manter.';
	} else if (shipVelocity >= 80 && shipVelocity < 100) {
		document.getElementById('content').innerHTML =
			'Velocidade alta! Considere diminuir.';
	} else {
		document.getElementById('content').innerHTML =
			'Velocidade perigosa! Controle automático forçado.';
	}
});
