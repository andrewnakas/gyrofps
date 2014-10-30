 #pragma strict

var target1 : Transform;
var amera : GameObject;
function Start () {

}

function Update () {
amera = GameObject.Find("MainCamera");
target1 = amera.transform;
 target1.transform.rotation.y =transform.rotation.y ;

}