var states = {
	"off":"garbage text",
	"timer" : "garbage text"
};

var currentState = "off";

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
	if(request.command==="startTimer" && currentState=== "off"){
		startTimer();
		sendResponse({message:"Timer started"});
	}
});


function startTimer(){
	// var start = moment();
	var start = new Date();
	var timer = setInterval(function(){
		// var diff = moment().diff(start,'seconds');
		var diff = start.getSeconds();
		updateTime(diff);
		var timeLength = localStorage["timer-selection"] || 10;
		if(diff>timeLength){
			clearInterval(timer);
		}
		notifyUser();

	},1000);
		currentState = "timer";
}


function updateTime(diff){
	chrome.runtime.sendMessage({
		"command":"updateTime",
		"time":diff
	})
}


function notifyUser(){
	var opts = {
		"type":"basic",
		"title":"Hello",
		"message":"sample message",
		"iconUrl":"icon.png"
	};

	var  idBase = "prabodh";
	var id = idBase+new Date().getTime();

chrome.notifications.create(id,opts,function(){
	console.log("id :"+id);
})


}
