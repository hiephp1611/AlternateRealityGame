using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class move : MonoBehaviour
{
    //private Rigidbody2D ship;
    public Create creat;

    public Rigidbody2D ship ;
    public float thrustSpeed = 10f;
    public bool thrusting ;
    public bool backing;
    public float turnDirection  = 0f;
    public float rotationSpeed = 0.005f;
    public Manager manage;

    private void Start()
    {
        ship = GetComponent<Rigidbody2D>();
        creat = FindObjectOfType<Create>();
        manage = FindObjectOfType<Manager>();
    }

    // Update is called once per frame
    void Update()
    {
        if ( !manage.freeze ){
            thrusting = Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.UpArrow);
            backing = Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow);

            if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow)) {
                turnDirection = 1f;
            } else if (Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow)) {
                turnDirection = -1f;
            } else {
                turnDirection = 0f;
            }
        }
    }

     private void FixedUpdate()
    {
        if (manage.ingame){
            if (!manage.freeze){
                if (thrusting) 
                    ship.AddForce(transform.up * thrustSpeed);
                
                if (backing)
                    ship.AddForce(-transform.up * thrustSpeed);    
                

                if (turnDirection != 0f) 
                    ship.AddTorque(rotationSpeed * turnDirection);
            }
            else{
                ship.velocity = Vector2.zero;
                ship.angularVelocity = 0f;
            }
                 

        }
    }

   private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Asteroid") )
        {
            shipReset();
            manage.ingame = false;
            FindObjectOfType<Manager>().GameOver();
        }else if (!collision.gameObject.CompareTag("wall"))
        {
            //shipReset();
             Destroy(collision.gameObject);
        }
    }

    private void shipReset()
    {
            ship.velocity = Vector2.zero;
            ship.angularVelocity = 0f;
            ship.transform.position = new Vector2(0, 0);
            ship.transform.rotation = Quaternion.identity;
            FindObjectOfType<Manager>().DestroyAll("Asteroid");
            FindObjectOfType<Manager>().DestroyAll("hidden");
    }



    

   

}
