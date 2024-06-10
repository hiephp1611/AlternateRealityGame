using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// This component is responsible for managing the state and input of a sliding
// tile puzzle.
public class SlidingTilePuzzle : MonoBehaviour
{
	enum Direction
	{
		Right,
		Up,
		Left,
		Down
	};

	struct MoveKey
	{
		public KeyCode key;
		public Direction direction;

		public MoveKey(KeyCode key, Direction direction)
		{
			this.key = key;
			this.direction = direction;
		}
	}

	static Direction GetOppositeDirection(Direction direction)
	{
		switch (direction)
		{
			default:
			case Direction.Right:
				return Direction.Left;

			case Direction.Up:
				return Direction.Down;

			case Direction.Left:
				return Direction.Right;

			case Direction.Down:
				return Direction.Up;
		}
	}

	const int width = 4; // Width of the puzzle in tiles
	const int height = 4; // Height of the puzzle in tiles

	public Tile[] tiles; // Tiles associated with this puzzle in order from 1 - 15.
    public Transform[] tileMarkers; // Tile locations in order from 1 - 16.
	public int shuffles = 1; // Number of times to shuffle at the start
	public Material qrMaterial;
	public float moveDuration = 0.25F;
	public float solveDuration = 1.0F;
	public CanvasGroup hintCanvas;

	private int freeTile; // Position index of the free tile
	readonly private MoveKey[] moveKeys = {
		new MoveKey(KeyCode.RightArrow, Direction.Right),
		new MoveKey(KeyCode.UpArrow, Direction.Up),
		new MoveKey(KeyCode.LeftArrow, Direction.Left),
		new MoveKey(KeyCode.DownArrow, Direction.Down)
	};
	private bool isMoving = false;
	private float endMoveTime = 0.0F;
	private bool isSolved = false;
	private float startSolveTime = 0.0F;
	private float endSolveTime = 0.0F;
	private bool finishedSolving = false;

    // Start is called before the first frame update
    void Start()
	{
		qrMaterial.SetFloat("_QRAmount", 0.0F);
		hintCanvas.alpha = 1.0F;

		for (int i = 0; i < tiles.Length; i++)
        {
            tiles[i].transform.position = tileMarkers[i].transform.position;
            tiles[i].transform.rotation = tileMarkers[i].transform.rotation;
			tiles[i].index = i;
        }

		freeTile = width * height - 1;

		// Shuffle the intial state and make sure the puzzle doesn't start solved
		do
		{
			Shuffle(shuffles);
		}
		while (CheckIfSolved());
    }

    // Update is called once per frame
    void Update()
    {
		if (isMoving && Time.time < endMoveTime)
			return;

		if (isSolved)
		{
			if (finishedSolving)
				return;

			UpdateMaterial();

			return;
		}

		if (CheckIfSolved())
		{
			Solve();
			return;
		}

		UpdateInput();
    }

	private bool CanMoveInDirection(Direction direction)
	{
		return true;
	}

	private void MoveInDirection(Direction direction, float duration)
	{
		Tile tile = GetTileInDirection(GetOppositeDirection(direction));
		if (!tile)
			return;

		Transform targetTransform = tileMarkers[freeTile];
		Vector3 targetPosition = targetTransform.position;
		Quaternion targetRotation = targetTransform.rotation;

		// Swap index of tile with index of free tile
		(freeTile, tile.index) = (tile.index, freeTile);

		tile.MoveToPosition(targetPosition, targetRotation, duration);

		isMoving = true;
		endMoveTime = Time.time + duration;
	}

	private Tile GetTileInDirection(Direction direction)
	{
		int tileIndex = GetTileIndexInDirection(direction);
		if (tileIndex == -1)
			return null;

		return GetTileOfIndex(tileIndex);
	}

	/// <summary>
	/// Get the index of the tile in the direction relative to the free tile.
	/// </summary>
	/// <param name="direction">Direction to find tile index in</param>
	/// <returns>Returns -1 if there is no tile in that direction.</returns>
	private int GetTileIndexInDirection(Direction direction)
	{
		switch (direction)
		{
			case Direction.Right:
			{
				if (freeTile % width == width - 1)
					// Free tile is on right edge of puzzle
					return -1;

				return freeTile + 1;
			}

			case Direction.Up:
			{
				if (freeTile / height == 0)
					// Free tile is on top edge of puzzle
					return -1;

				return freeTile - width;
			}

			case Direction.Left:
			{
				if (freeTile % width == 0)
					// Free tile is on left edge of puzzle
					return -1;

				return freeTile - 1;
			}

			case Direction.Down:
			{
				if (freeTile / height == height - 1)
					// Free tile is on bottom edge of puzzle
					return -1;

				return freeTile + width;
			}

			default:
				return -1;
		}
	}

	private Tile GetTileOfIndex(int index)
	{
		foreach (Tile tile in tiles)
		{
			if (tile.index == index)
				return tile;
		}

		return null;
	}

	private bool CheckIfSolved()
	{
		int previousIndex = -1;
		foreach (Tile tile in tiles)
		{
			if (tile.index != previousIndex + 1)
				return false;

			previousIndex = tile.index;
		}

		return true;
	}

	private void Shuffle(int moveCount)
	{
		for (int i = 0; i < moveCount; i++)
		{
			Direction[] dirs = GetAvailableDirections();
			Direction moveDir = dirs[Random.Range(0, dirs.Length)];
			MoveInDirection(moveDir, 0.0F);
		}
	}

	private Direction[] GetAvailableDirections()
	{
		List<Direction> dirs = new List<Direction>();

		foreach (Direction dir in System.Enum.GetValues(typeof(Direction)))
		{
			if (CanMoveInDirection(dir))
				dirs.Add(dir);
		}

		return dirs.ToArray();
	}

	private void UpdateInput()
	{
		foreach (MoveKey key in moveKeys)
		{
			if (Input.GetKeyDown(key.key) && CanMoveInDirection(key.direction))
			{
				MoveInDirection(key.direction, moveDuration);
			}
		}
	}

	private void UpdateMaterial()
	{
		float amount;

		if (Time.time < endSolveTime)
		{
			amount = (Time.time - startSolveTime) / (endSolveTime - startSolveTime);
			amount = Mathf.SmoothStep(0.0F, 1.0F, amount);
		}
		else
		{
			amount = 1.0F;
			finishedSolving = true;
		}

		qrMaterial.SetFloat("_QRAmount", amount);
		hintCanvas.alpha = 1.0F - amount;
	}

	private void Solve()
	{
		startSolveTime = Time.time;
		endSolveTime = Time.time + solveDuration;
		isSolved = true;
	}
}
