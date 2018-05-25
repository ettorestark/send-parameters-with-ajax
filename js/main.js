(function(window, document) {
	function httpRequest(element, method, url, parameter) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				document.getElementById(element).innerHTML = this.responseText;
			}
		};
		if(method == "POST") {
			xhttp.open(method, url, true);
		}else {
			xhttp.open(method, url+parameter, true);
		}
		xhttp.send();
	}
	window.addEventListener('keyup', function() {
		var something = document.getElementById("something").value;
		httpRequest('show', 'GET', 'request.php?something=', something);
	});
})(window, document);