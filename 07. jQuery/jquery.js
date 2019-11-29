// Overview: jquery is library used more that 75% of all sites. Its good for all browsers
// Simplifield AJAX calls and working with RESTful services
// Add Jquery : <script src="jquery-3.4.1.min.js"></script>
//             JQuery SELECTORS
//jQuery selectors return a collection matched items
//$('div') // document.getElementsByTagName('div');
//$('.menu-item') // document.getElementsByClassName('.menu-item');
//$('#navigation') // document.getElementById('navigation');
//$('ul.menu li') // document.querySelectorAll('ul.menu li');
//Even if there is only one item
//Selected elements can be processed as a group -$('div').css('background', 'blue'); // Make all DIVs blue

//$('*') // Selects all elements
//$('.class') // Selects all elements by CLASS name
//$('section') // Selects all elements by TAG name
//$('#id') // Selects a element by given ID
//$('selector1, selector2') // Combined SELECTOR

// e.preventDefault();  e.stopPropagation(); - Koмбинация от команди при писането на
//евент лисенери, за да сме сигурни че няма да ни се омаже кода

//Adding and removing elements from DOM Tree
// append()/prepend()   