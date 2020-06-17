function solve() {
	let currentTitle = document.getElementById('createTitle');
	let currentTextArea = document.getElementById('createContent');

	let textTitle = currentTitle.value;
	let textTextArea = currentTextArea.value;

	if(textTitle.length > 0 && textTextArea.length > 0){

		let createElementTitle = document.createElement('h3');
		let createElementTextArea = document.createElement('p');
		let createElementArticle = document.createElement('article');

		createElementTitle.innerHTML += textTitle;
		createElementTextArea.textContent += textTextArea;

		createElementArticle.appendChild(createElementTitle);
		createElementArticle.appendChild(createElementTextArea);
		document.getElementById('articles').appendChild(createElementArticle);
		
	  	currentTitle.value = '';
		currentTextArea.value = '';
	}
}