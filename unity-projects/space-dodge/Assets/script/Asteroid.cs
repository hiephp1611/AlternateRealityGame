using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Asteroid : MonoBehaviour
{
    private SpriteRenderer ast;

    private Rigidbody2D body;

    public Sprite[] sprites;

    public float MinSize =  50f;

    public float MaxSize =  150f;

    public float size = 10f;

    public float speed = 7f;

    public float maxLife = 30f;
    
    public Manager manage;

    public Create creat;  

    public Vector2 currentMovement;

    // Start is called before the first frame update
    void Awake()
    {
        ast = GetComponent<SpriteRenderer>();
        body = GetComponent<Rigidbody2D>();
        manage = FindObjectOfType<Manager>();
        creat = FindObjectOfType<Create>();
        
    }

    // Update is called once per frame
    private void Start()
    {
        ast.sprite = sprites[Random.Range(0,sprites.Length)];
        this.transform.eulerAngles = new Vector3(0f, 0f, 0f);
        this.transform.localScale = Vector3.one * size;

        body.mass =  this.size * 2f;
    }

    public void setTraj(Vector2 dir)
    {
        this.currentMovement = dir * this.speed;
        body.AddForce(currentMovement);

        Destroy(this.gameObject, this.maxLife);
    }

}
