using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class inGame : MonoBehaviour
{
    public void onClick()
    {
        FindObjectOfType<Manager>().StartGame();
    }

}
