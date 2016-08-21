//TO DO LIST
function todoList() {

	var item = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	if (item == "") {
		return false;
	}
	else {

	newItem.appendChild(text)
	document.getElementById("todoList").appendChild(newItem)

	//click once to linethrough
	function linethru(e) {
		newItem.className = "line"
	}
	//call function
	newItem.onclick = linethru

	

	//double click to remove li
	function removeLi(e) {
		newItem.parentElement.removeChild(newItem);
	}
	//call function
	newItem.ondblclick = removeLi



}

}

//WHEN ENTER KEY IS PRESSED DOWN, RUN todoList()
document.onkeydown = function(e){
	if(e.keyCode == 13) {
		e.preventDefault();
		todoList();
		document.getElementById("todoForm").reset();
	}
};
