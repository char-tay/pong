#pragma strict

function Start () {
	var randomNumber = Random.Range(0,2); // spits integers
	if(randomNumber == 1) {
		rigidbody2D.AddForce(new Vector2 (80,10));
		Debug.Log("Shoot right " + randomNumber);
	}
	else {
		rigidbody2D.AddForce(new Vector2(-80,-10));
		Debug.Log("Shoot left " + randomNumber);
	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player") {
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
	}
}