#pragma strict
 
static var gyroBool : boolean;
private var gyro : Gyroscope;
private var quatMult : Quaternion;
private var quatMap : Quaternion;
private var camGrandparent : GameObject;
function Awake() {
    // find the current parent of the camera's transform
    var currentParent : Transform = transform.parent;
    // instantiate a new transform
    var camParent : GameObject = new GameObject("camParent");
  
    // match the transform to the camera position
    camParent.transform.position = transform.position;
    // make the new transform the parent of the camera transform
    transform.parent = camParent.transform;
 
    // Also creates a grandparent (camGrandparent) which can be rotated with localEulerAngles.y
    // This node allows an arbitrary heading to be added to the gyroscope reading
    // so that the virtual camera can be facing any direction in the scene, no matter what the phone's heading
    camGrandparent = new GameObject("camGrandParent");
   //  camGrandparent.AddComponent("grandlock");
    // match the transform to the camera position
    camGrandparent.transform.position = transform.position;
    // make the new transform the parent of the camera transform
    camParent.transform.parent = camGrandparent.transform;
    // make the original parent the grandparent of the camera transform
    camGrandparent.transform.parent = currentParent;
 
    // check whether device supports gyroscope
    gyroBool = SystemInfo.supportsGyroscope;
 
    if (gyroBool) {
        gyro = Input.gyro;
        gyro.enabled = true;
     
        #if UNITY_IPHONE
            camParent.transform.eulerAngles = Vector3(90, 0, 0);
            quatMult = Quaternion(0,0,1,0);
        #endif
     
        Screen.sleepTimeout = SleepTimeout.NeverSleep;
    } else {
        print("NO GYRO");
    }
}
 
function Start() {
    // First, check if user has location service enabled
   
}
function Update() {
//Debug.Log(transform.eulerAngles.y + " " + transform.localEulerAngles.y);
    if (gyroBool) {
        #if UNITY_IPHONE
            quatMap = gyro.attitude;
        #endif
     
        
        transform.localRotation = quatMap * quatMult;
    }
}