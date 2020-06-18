function solve(){
  let wholeText = document.getElementById('input').textContent;
  let splittedText = wholeText.split('.');
  let countOfsentences = splittedText.length - 2;

  let count = 0;
  let currentSentences = '';
  for (i = 0; i <= countOfsentences; i++) {
    
    currentSentences += splittedText[i] + '.';
    count++;

    if(count == 3){
      let newParagraf = document.createElement('p');

      var text = document.createTextNode(currentSentences);
      newParagraf.appendChild(text);

      document.getElementById('output').appendChild(newParagraf);
      currentSentences = '';
      count = 0;
    }
  }

  if(count == 1 || count == 2){
    let newParagraf = document.createElement('p');

    var text = document.createTextNode(currentSentences);
    newParagraf.appendChild(text);

    document.getElementById('output').appendChild(newParagraf);
  }
}