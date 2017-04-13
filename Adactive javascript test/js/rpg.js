var map = new Map("first");

var player = new Character("example.png", 7, 14, DIRECTION.DOWN);
map.addCharacter(player);

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	canvas.width  = map.getWidth() * 32;
	canvas.height = map.getHeight() * 32;
	
	setInterval(function() {
		map.drawMap(ctx);
	}, 40);
	
	// Keyboard event handler
	window.onkeydown = function(event) {
		// Get the keystroke code
		var e = event || window.event;
		var key = e.which || e.keyCode;
		
		switch(key) {
			case 38 : case 122 : case 119 : case 90 : case 87 : // Up arrow, z, w, Z, W
				player.move(DIRECTION.UP, map);
				break;
			case 40 : case 115 : case 83 : // down arrow, s, S
				player.move(DIRECTION.DOWN, map);
				break;
			case 37 : case 113 : case 97 : case 81 : case 65 : // left arrow, q, a, Q, A
				player.move(DIRECTION.LEFT, map);
				break;
			case 39 : case 100 : case 68 : // right arrow, d, D
				player.move(DIRECTION.RIGHT, map);
				break;
			case 32 :	//space
				player.jump(map); 
				break;
			case 13:	//enter
				player.changeTile(map);
				break;
			default : 
				//alert(key);
				// If the key doesn't server use, we don't have any reason to block normal behaviour
				return true;
		}
		
		return false;
	}
}
