using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class hidden : MonoBehaviour
{
    public int index;

   private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Ship"))
        {
            FindObjectOfType<Manager>().beginHidden(index);

        }
    }

    public void setIndex(int index)
    {
        this.index = index;
    }


    
}
