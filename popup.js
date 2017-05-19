function init() {
	addClickhandlers();
}

function addClickhandlers(){
	var buttonsDiv=document.getElementbyId("timer-selection");
	var buttons = buttonsDiv.children;
	Array.prototype.forEach.call(buttons,function(button){
		button.onclick = function(event){
			var specificButton = event.target;
			var timeSelected = +specificButton.innerText;
			localStorage["timer-selection"] = timeSelected;
		}
	})
	
}

document.addEventListner('DOMContentLoaded',init);