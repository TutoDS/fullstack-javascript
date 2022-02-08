/**
 * Show alert to info the user about the data request
 */
alert('Bem vindo! A seguir pediremos que informe alguns dados');

/**
 * Ask data to the user
 * - name
 * - age
 * - age confirmation
 */
const userName = prompt('Qual o seu nome?');
const age = prompt('Qual a sua idade?');
const ageConfirmation = confirm(`Você tem ${age} anos?`);
console.log(userName);

/**
 * Print the data
 */
alert(
	`Olá ${userName}! Você ${
		ageConfirmation ? 'confirmou' : 'não confirmou'
	} que tem ${age} anos.`
);
