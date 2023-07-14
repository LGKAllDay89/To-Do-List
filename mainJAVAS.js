

let id = 0;
let blank= [];

function add() {
	
	let results = document.getElementById("submit").value;
	blank.push(results);
	document.getElementById("tasks").innerHTML +=
		`<div class="task" id="containerTask">
			<input type="checkbox" class="check" id="check" onclick="line(this)">
			<span id="taskname" contentEditable="true">
				${results}
			</span>

			<button id="delete" onclick="erase()">
				<i class= "far fa-trash-alt" class="trash"></i>
			</button>
			
		</div>

		`;
	}

function erase() {
	
	let toErase = document.getElementById('delete');
	
	toErase.parentNode.remove();
toErase.previousElementSibling.style.color = "red";


}



function line(elem) {
	
	let deleteButton = document.getElementById("deleteAll");
	deleteButton.disabled = true;

	let newElem = elem.nextElementSibling;

if (elem.checked === true) {
	deleteButton.disabled=false;
	
	//newElem.style.color = "red";	
	elem.parentElement.style.background = "lightgrey";
	
	newElem.style.textDecoration = "line-through";
	

	
	} else {
	elem.parentElement.style.background = "lightskyblue";
	
	newElem.style.color = "black";
	
	newElem.style.textDecoration = "none";
	
	}
	

}




function test() {
	alert(`${blank}`);
}


function showHistory() {
	alert(`${blank}`);
}


function saveTextFile() {
	const link= document.createElement("a");
	const file = new Blob([`${blank}`], {type: "text/plain"});
	link.href= URL.createObjectURL(file);

	link.download = "sample.txt";

link.click()
URL.revokeObjectURL(link.href);

}



function deleteAll(e) {
	let deleteButton = document.getElementById("deleteAll");
	let ele = document.querySelectorAll("input[type='checkbox']");
	
	for (let check of ele) {
		if (check.checked === true) {
		check.parentNode.remove();	
		deleteButton.disabled =true;
		
	}else {

		deleteButton.disabled = true;
	 	
	} 
}}


/*


changeCount = 0;

function done() {
changeCount ++;
const strike = document.getElementById("taskname");

strike.style.textDecoration = "line-through";

if (changeCount % 2 !=0) {
	strike.style.textDecoartion = "line-through"
	} else 
	strike.style.textDecoration = "none";

}

*/




