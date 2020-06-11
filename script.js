var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('ul li');
var deleteButton = document.querySelectorAll('.delete');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');

	li.appendChild(document.createTextNode(input.value));
	li.appendChild(addDeleteButton());
	toggleClass(li);
	ul.appendChild(li);
	input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClass(item) {
	item.addEventListener('click', function () {
		item.classList.toggle('done');
	});
}

function deleteItem(item) {
	item.addEventListener('click', function () {
		item.parentElement.remove();
	});
}

function addDeleteButton() {
	var button = document.createElement('button');
	button.classList.add('delete');
	button.appendChild(document.createTextNode('Delete'));
	deleteItem(button);
	return button;
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
li.forEach(toggleClass);
deleteButton.forEach(deleteItem);
