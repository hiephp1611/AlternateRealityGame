using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class stop : MonoBehaviour
{
    public void Restart()
    {
        FindObjectOfType<Manager>().Restart();
    }
}
