var counter = 0;
var cross = 0x000000;  // black
var zero = 0xFF0000; // red FF0000 16711680
var colorFill = cross;
var text;
var gameState = "on";
console.log(counter);
	
PS.init = function( system, options ) {
	"use strict"; // Do not remove this directive!
	PS.gridSize( 3, 3 );
	PS.gridColor(0,0,0);
	PS.statusText( "Player 1 turn" );
	PS.statusColor( PS.COLOR_WHITE );
	PS.border(PS.ALL, PS.ALL,0);
	PS.glyph(PS.ALL, PS.ALL, ".");
	
};


PS.touch = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!
	PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );
		
	if(PS.color(x,y) == 16777215){
		if (counter%2 == 0){
			colorFill = cross;
			PS.statusText( "Player 2 turn" );
		} else {
			colorFill = zero;
			PS.statusText( "Player 1 turn" );
		}
		counter++;
		PS.color(x,y,colorFill);
		PS.glyph(x, y, "");
	}

	if(gameState == "done")  {
		PS.gridSize( 3, 3 ); 
		counter = 0;	
		PS.statusText( "Player 1 turn" );
		PS.border(PS.ALL, PS.ALL,0);
		PS.glyph(PS.ALL, PS.ALL, ".");
		gameState = "on";
	};

	if(counter > 4 ){
		// player 1 tests
		
			if ((PS.color(0,0) == 0) && (PS.color(0,1) == 0) && (PS.color(0,2) == 0)){text = "Player 1 wins"; gameState = "done";};
			if ((PS.color(1,0) == 0) && (PS.color(1,1) == 0) && (PS.color(1,2) == 0)){text = "Player 1 wins"; gameState = "done";};
			if ((PS.color(2,0) == 0) && (PS.color(2,1) == 0) && (PS.color(2,2) == 0)){text = "Player 1 wins"; gameState = "done";};
			if ((PS.color(0,0) == 0) && (PS.color(1,0) == 0) && (PS.color(2,0) == 0)){text = "Player 1 wins"; gameState = "done";};
			if ((PS.color(0,1) == 0) && (PS.color(1,1) == 0) && (PS.color(2,1) == 0)){text = "Player 1 wins"; gameState = "done";};
			if ((PS.color(0,2) == 0) && (PS.color(1,2) == 0) && (PS.color(2,2) == 0)){text = "Player 1 wins"; gameState = "done";};
			if ((PS.color(0,0) == 0) && (PS.color(1,1) == 0) && (PS.color(2,2) == 0)){text = "Player 1 wins"; gameState = "done";};
			if ((PS.color(2,0) == 0) && (PS.color(1,1) == 0) && (PS.color(0,2) == 0)){text = "Player 1 wins"; gameState = "done";};
		// player 2 tests			
			if ((PS.color(0,0) == 16711680) && (PS.color(0,1) == 16711680) && (PS.color(0,2) == 16711680)){text = "Player 2 wins"; gameState = "done";};
			if ((PS.color(1,0) == 16711680) && (PS.color(1,1) == 16711680) && (PS.color(1,2) == 16711680)){text = "Player 2 wins"; gameState = "done";};
			if ((PS.color(2,0) == 16711680) && (PS.color(2,1) == 16711680) && (PS.color(2,2) == 16711680)){text = "Player 2 wins"; gameState = "done";};
			if ((PS.color(0,0) == 16711680) && (PS.color(1,0) == 16711680) && (PS.color(2,0) == 16711680)){text = "Player 2 wins"; gameState = "done";};
			if ((PS.color(0,1) == 16711680) && (PS.color(1,1) == 16711680) && (PS.color(2,1) == 16711680)){text = "Player 2 wins"; gameState = "done";};
			if ((PS.color(0,2) == 16711680) && (PS.color(1,2) == 16711680) && (PS.color(2,2) == 16711680)){text = "Player 2 wins"; gameState = "done";};
			if ((PS.color(0,0) == 16711680) && (PS.color(1,1) == 16711680) && (PS.color(2,2) == 16711680)){text = "Player 2 wins"; gameState = "done";};
			if ((PS.color(2,0) == 16711680) && (PS.color(1,1) == 16711680) && (PS.color(0,2) == 16711680)){text = "Player 2 wins"; gameState = "done";};
		
		PS.statusText( text );
		if (counter == 9) {text = "draw"; gameState = "done";}
		PS.debug(counter + "\n");
	};
	
};

PS.release = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!
	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );
	//PS.color(x,y,255,255,255);
};

PS.enter = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!
	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );
	//if(PS.color(x,y) == 16777215){PS.color(x,y,200,200,200);};
	
};

PS.exit = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!
	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );
	//if(PS.color(x,y) == 13158600){PS.color(x,y,255,255,255);};
};

PS.exitGrid = function( options ) {
	"use strict"; // Do not remove this directive!
	// PS.debug( "PS.exitGrid() called\n" );
};


PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict"; // Do not remove this directive!
	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );
};

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict"; // Do not remove this directive!
	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );
};

PS.input = function( sensors, options ) {
	"use strict"; // Do not remove this directive!
	var device = sensors.wheel; // check for scroll wheel

	if ( device ) {
	// PS.debug( "PS.input(): " + device + "\n" );
	}
};


/*

PS.shutdown = function( options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to verify operation:

	// PS.debug( "“Dave. My mind is going. I can feel it.”\n" );

	// Add code here to tidy up when Perlenspiel is about to close.
};

*/
