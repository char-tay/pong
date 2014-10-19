#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var theSkin : GUISkin;

static function Score(wallName : String) {
	if(wallName == "rightWall") {
		playerScore01++;	
	}
	else {
		playerScore02++;
	}
	
	Debug.Log("player1 score: " + playerScore01 + " player2 score: " + playerScore02);
}

function OnGUI() {
	GUI.skin = theSkin;
	GUI.Label (new Rect (Screen.width/2 - 150, 20, 100, 100), "" + playerScore01);
	GUI.Label (new Rect (Screen.width/2 + 150, 20, 100, 100), "" + playerScore02);
}