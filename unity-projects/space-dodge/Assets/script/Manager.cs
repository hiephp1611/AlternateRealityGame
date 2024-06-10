using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Manager : MonoBehaviour
{

    public bool hit ;
    public GameObject canvas;
    public GameObject passSceen;
    public GameObject button;
    private GameObject newCanvas;

    public GameObject beginScreen;
    private GameObject newScreen;

    public GameObject hiddenScreen;
    private GameObject newHidden;


    public bool ingame;
    public bool freeze;
    public TMP_InputField field;
    private Rigidbody2D body;



    public string[] HiddenText;
    private string tempGO;

    public hidden hidden;

    void Start()
    {
        ingame = false;
        freeze = false;
        CreateHidden();
    }


    public void beginGame()
    {
      newScreen = Instantiate(beginScreen) as GameObject;
    }

    public void StartGame()
    {
      Destroy(newScreen.gameObject);
      ingame = true;
    }

    public void beginHidden(int index)
    {
      if (!freeze){
        newHidden = Instantiate(hiddenScreen) as GameObject;
        FindObjectOfType<showHidden>().setIndex(index);
        this.freeze = true;

      }
      
    }

    public void endHidden()
    {
     if (newHidden != null){
        Destroy(newHidden.gameObject);
        this.freeze = false;
     //   if (GameObject.FindGameObjectsWithTag("hidden") != null)
     //     CreateHidden();
      } 
    }


    public void DestroyAll(string tag)
      {
            GameObject[] a = GameObject.FindGameObjectsWithTag(tag);
            foreach (var item in a)
            {
               Destroy(item.gameObject);
            }

            
      }

      public void GameOver()
      {
        GameObject newButton = Instantiate(button) as GameObject;
        newCanvas = Instantiate(canvas) as GameObject;
        newButton.transform.SetParent(newCanvas.transform, false);
      }

      public void Restart()
      {
        if ( newCanvas != null)
            Destroy(newCanvas.gameObject);
        ingame = true;
        CreateHidden();
      }

      public void Shuffle() 
      {
          for (int i = 0; i < HiddenText.Length - 1; i++) 
          {
              int rnd = Random.Range(i, HiddenText.Length);
              tempGO = HiddenText[rnd];
              HiddenText[rnd] = HiddenText[i];
              HiddenText[i] = tempGO;
          }
      }

      public void CreateHidden()
      {
        //this.Shuffle();
        hidden h = Instantiate(hidden, new Vector2(34.7f,28.3f), Quaternion.identity);
        h.setIndex (0);
        hidden h1 = Instantiate(hidden, new Vector2(34.7f,-27.4f), Quaternion.identity);
        h1.setIndex (1);
        hidden h2 = Instantiate(hidden, new Vector2(-33.7f,-27.4f), Quaternion.identity);
        h2.setIndex (2);
        hidden h3 = Instantiate(hidden, new Vector2(-33.7f,28.3f), Quaternion.identity);
        h3.setIndex (3);


      }
      
      
}
