	function openNav() {
	    document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("menu").style.marginRight = "0px";
	    document.getElementById("menu").style.display = "none";
	}

	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	    document.getElementById("menu").style.marginRight = "0";
	    document.getElementById("menu").style.display = "block";
	}


	var modal = document.getElementById('myModal');
	var btn = document.getElementById("model-button");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
	    modal.style.display = "block";
	}
	span.onclick = function() {
	    modal.style.display = "none";
	}
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	window.onkeydown = function(event) {
	    if (event.keyCode == 27) {
	        modal.style.display = "none";
	    }
	};
