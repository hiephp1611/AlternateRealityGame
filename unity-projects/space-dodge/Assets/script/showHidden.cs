using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class showHidden : MonoBehaviour
{
    public TextMeshProUGUI tmp;
    public int index;

    public void setIndex(int index)
    {
        this.index = index;
    }

    public void Update()
    {
        tmp.text= FindObjectOfType<Manager>().HiddenText[this.index];
    }

    
}
