//          Document Object Model
//We traverse the DOM tree. All HTML documents are store as DOM trree
//We can get elements (byId, byClass and so on)
//Live vs Static Selector Exp: getElementsByTagName() vs querySelectorAll();
// TextContent(escaped)
//document.getElementById("base").appendChild(myDivs).textContent = "<div></div>"(Съдържа-
//нието на взетия елемент се променя на това което сме задали)

//innerHRML(PARSED and turned in HTML el) BEWARE XSS ATTACKS
//document.getElementById("base").appendChild(myDivs).innerHTML = "<div></div>"(изтрива всичко 
//и го заменя с подадения таг)
//SetTimeout  - return  function by given time
//SetInterval - loops function by given interval

//EVENT LOOP* - JS е асинхронен и се изполва EVENT LOOP. Той минава ред по ред по кода
//и вместо да визуализира и рефрешва постоянно страницата когато я зарежда,
//процесите се нареждат на нещо като опашка и всяка чака своя ред
//това може да се фикстне с SetTimeout