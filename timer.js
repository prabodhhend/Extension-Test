function init(){
	// alert("hello")
	addMessageListeners();
	startTimer();
}

function startTimer(){
chrome.runtime.sendMessage({"command":"startTimer"},
	function(response){
		// console.log(response.message);
	});
}

function addMessageListeners(){
	chrome.runtime.onMessage.addListener(
		function(request,sender,sendResponse){
			if(request.command==="updateTime"){
				var diff = request.time;
				document.getElementById("time").innerText= diff;
			}
		})
}


document.addEventListener('DOMContentLoaded',init);

