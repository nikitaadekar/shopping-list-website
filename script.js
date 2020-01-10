var button =  document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");




function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li")
	var button1 = document.createElement('button');
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	li.appendChild(button1);
	button1.appendChild(document.createTextNode('Delete'));
	input.value = "";
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

function toggleAfterClick(event){
		var target = event.target;
		if (target.tagName!=='BUTTON'){

		
			target.classList.toggle("done");
		}
		else{
			target.parentNode.parentNode.removeChild(target.parentNode);
		}
		}
	


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",toggleAfterClick)




