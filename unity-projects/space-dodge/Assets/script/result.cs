using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class result : MonoBehaviour
{
    public TextMeshProUGUI  GameOver_text;
    // Start is called before the first frame update

    // Update is called once per frame
    void Update()
    {
        timer time =  FindObjectOfType<timer>();
        if (time != null)
        {
            GameOver_text.text = FindObjectOfType<timer>().score;
        }
        
    }
}
