//Create and Insert Elements using .createElement(tagName)

//Create element
let newDestination = document.createElement('li');
newDestination.id = 'oaxaca';
//Add content
newDestination.innerHTML = 'Oaxaca, Mexico';
//Append element
document.getElementById('more-destinations').appendChild(newDestination);
