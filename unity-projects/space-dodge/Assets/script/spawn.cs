    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
     
    public class spawn : MonoBehaviour
    {
        public float rate =  4f;

        public float currentRate;
        
        
        public float dis = 40f;

        public int amount = 8;

        public Asteroid ast;

        public float trajectoryVar = 30f;  

        public Create creat;  

        public Manager manage;

        void Start()
        {
            currentRate = rate;
            creat = FindObjectOfType<Create>();
            manage = FindObjectOfType<Manager>();

            InvokeRepeating(nameof(make), this.rate, this.rate);

             
        }
     

        private void make()
        {
            if (manage.ingame && !manage.freeze){
                for (int i = 0; i < amount; i++)
                {
                    Vector3 spawnDir = Random.insideUnitCircle.normalized * this.dis;
                    Vector3 spawnPoint = this.transform.position + spawnDir;

                    float variance = Random.Range(-this.trajectoryVar, this.trajectoryVar);
                    Quaternion rotation = Quaternion.AngleAxis(variance, Vector3.forward);

                    Asteroid a = Instantiate(ast, spawnPoint, rotation );
                    a.size = Random.Range(a.MinSize, a.MaxSize);

                    a.setTraj(rotation * -spawnDir);
                }
            }
        }

    }
