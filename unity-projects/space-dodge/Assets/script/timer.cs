using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;


public class timer : MonoBehaviour
{

    public float time;

    [SerializeField]
    private TextMeshProUGUI  minute1;
    [SerializeField]
    private TextMeshProUGUI  minute2;
    [SerializeField]
    private TextMeshProUGUI  separator;
    [SerializeField]
    private TextMeshProUGUI  second1;
    [SerializeField]
    private TextMeshProUGUI  second2;

    public Create creat;
    public Manager manage;

    public string  score;
    // Start is called before the first frame update
    void Start()
    {
        creat = FindObjectOfType<Create>();
        manage = FindObjectOfType<Manager>();
    }

    // Update is called once per frame
    void Update()
    {
        if (manage.ingame){
            if (!manage.freeze){
                time += Time.deltaTime;
                UpdateTime(time);
            }
        }
        else{
            time = 0;
        }
    }

    private void Reset(){
        time = 0;
    }

    private void SetTime(float preSet)
    {
        time = preSet;
    }
    
    private void UpdateTime(float time){
        float mintue = Mathf.FloorToInt(time / 60);
        float second = Mathf.FloorToInt(time % 60);

        string current = string.Format("{00:00}{1:00}", mintue, second);
        minute1.text = current[0].ToString();
        minute2.text = current[1].ToString();
        second1.text = current[2].ToString();
        second2.text = current[3].ToString();

        score = "You survived for\n " + current[0].ToString() + current[1].ToString() + " minute(s) and " + current[2].ToString() + current[3].ToString() + " seconds";


    
    }

}
