 #pragma strict
var target : Transform;
var target1 : Transform;
var cameraivot : GameObject;
function Start () {

}

function Update () {
cameraivot = GameObject.Find("camGrandParent");
target1 = cameraivot.transform;
transform.eulerAngles.y = target1.transform.eulerAngles.y ;
 transform.position.y = target.transform.position.y+2;
 transform.position.z = target.transform.position.z;
  transform.position.x = target.transform.position.x;
}