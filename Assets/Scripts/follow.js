#pragma strict
var target:Transform;
var target1:Transform;
var cameraivot : GameObject;

function Start () {

}

function Update () {
cameraivot = GameObject.Find("camGrandParent");
target1 = cameraivot.transform;
//Debug.Log(target.transform.eulerAngles.y );

transform.eulerAngles.y =target.transform.eulerAngles.y;
	

// transform.position.z= target.transform.position.z;
 //transform.position.x= target.transform.position.x;

}