using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// This component represents a single tile in a sliding tile puzzle.
public class Tile : MonoBehaviour
{
    private Vector3 startPosition;
    private Quaternion startRotation;
    private Vector3 targetPosition;
    private Quaternion targetRotation;
    private float startMoveTime;
    private float endMoveTime;
    private bool moving = false;

    public int index; // Index in the puzzle of this tile

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (moving)
        {
            Move();
        }
    }

    public void MoveToPosition(Vector3 position, Quaternion rotation, float duration)
    {
        startMoveTime = Time.time;
        endMoveTime = Time.time + duration;

        startPosition = transform.position;
        startRotation = transform.rotation;
        targetPosition = position;
        targetRotation = rotation;

        if (duration <= 0.0)
        {
			transform.position = position;
			transform.rotation = rotation;
            return;
		}

		moving = true;
	}

    private void Move()
    {
		if (Time.time < endMoveTime)
		{
            float amount = (Time.time - startMoveTime) / (endMoveTime - startMoveTime);
            amount = Mathf.SmoothStep(0.0F, 1.0F, amount);

            Vector3 newPos = Vector3.Lerp(startPosition, targetPosition, amount);
            Quaternion newRot = Quaternion.Lerp(startRotation, targetRotation, amount);

            transform.position = newPos;
            transform.rotation = newRot;

            return;
		}

        transform.position = targetPosition;
        transform.rotation = targetRotation;

        moving = false;
	}
}
