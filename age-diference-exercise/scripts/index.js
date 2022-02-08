const olderPersonName = document.getElementById('olderPersonName');
const olderPersonAge = document.getElementById('olderPersonAge');
const olderData = document.getElementById('olderData');

const youngerPersonName = document.getElementById('youngerPersonName');
const youngerPersonAge = document.getElementById('youngerPersonAge');
const youngerData = document.getElementById('youngerData');

olderPersonName.addEventListener('change', (evt) => {
	evt.preventDefault();
	olderData.innerHTML = `${olderPersonName.value} is ${olderPersonAge.value} years old`;
});

olderPersonAge.addEventListener('change', (evt) => {
	evt.preventDefault();
	olderData.innerHTML = `${olderPersonName.value} is ${olderPersonAge.value} years old`;

	if (youngerPersonAge.value && olderPersonAge.value) {
		document.getElementById('content').innerHTML = `${
			olderPersonName.value
		} is ${olderPersonAge.value} years old and ${
			youngerPersonName.value
		} is ${youngerPersonAge.value} years old.\nThe difference of age is: ${
			youngerPersonAge - olderPersonAge
		}`;
	}
});

youngerPersonName.addEventListener('change', (evt) => {
	evt.preventDefault();
	youngerData.innerHTML = `${youngerPersonName.value} is ${youngerPersonAge.value} years old`;
});

youngerPersonAge.addEventListener('change', (evt) => {
	evt.preventDefault();
	youngerData.innerHTML = `${youngerPersonName.value} is ${youngerPersonAge.value} years old`;

	if (youngerPersonAge.value && olderPersonAge.value) {
		document.getElementById('content').innerHTML = `${
			olderPersonName.value
		} is ${olderPersonAge.value} years old and ${
			youngerPersonName.value
		} is ${youngerPersonAge.value} years old.\nThe difference of age is: ${
			olderPersonAge.value - youngerPersonAge.value
		}`;
	}
});
