using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Create : MonoBehaviour
{
    public GameObject ship;
    public GameObject passSceen;
    public hidden hidden;
    public GameObject info;
    private GameObject newCanvas;
    

    public Manager manage;


    void Start()
    {
        
        manage = FindObjectOfType<Manager>();
        Instantiate(ship, new Vector2(0,0), Quaternion.identity);
        newCanvas = Instantiate(passSceen) as GameObject;

    }

    public void Update()
      {
        if ( manage.ingame && newCanvas != null)
            Destroy(newCanvas.gameObject);
      }
}
