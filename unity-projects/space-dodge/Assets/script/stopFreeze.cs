using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class stopFreeze : MonoBehaviour
{
   public void freezeHiddenClick()
    {
        FindObjectOfType<Manager>().endHidden();
        
    
    }

}
