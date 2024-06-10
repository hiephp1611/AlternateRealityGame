using UnityEngine;

public class compass : MonoBehaviour
{
    //public Transform target; // The target to point towards
    public Transform ship;

    private void Update()
    {

            float z_rot = ship.eulerAngles.z ;
            transform.rotation = Quaternion.Euler(0f, 0f, -z_rot);
        
    }
}
