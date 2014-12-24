#pragma strict

function Start () {

}

function Update () {
 if (Input.GetMouseButton(0))
  {
  Debug.Log("touch");
  transform.Translate(Vector3.forward * Time.deltaTime * 25);
  } else {
   Debug.Log("no touch");
  }
}