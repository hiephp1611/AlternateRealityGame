"use client"
import { useRef, useEffect, useState } from "react"
import { settings } from "../../../globalsettings"

const CANVAS_WIDTH = 320
const CANVAS_HEIGHT = 360

type Coord = {
  x: number;
  y: number;
}

type BitmapAnswerKey = {
  dimensions: { width: number; height: number },
  required: Coord[],
  forbidden: Coord[],
}

const whiteBearAnswerKey: BitmapAnswerKey = {
  dimensions: { width: CANVAS_WIDTH, height: CANVAS_HEIGHT },
  required: [
    { x: 160, y: 20 },
    { x: 160, y: 60 },
    { x: 160, y: 100 },
    { x: 160, y: 140 },
    { x: 160, y: 180 },

    { x: 110, y: 180 },
    { x: 210, y: 180 },

    { x: 60, y: 180 },
    { x: 60, y: 220 },
    { x: 60, y: 260 },
    { x: 60, y: 300 },
    { x: 60, y: 340 },

    { x: 260, y: 180 },
    { x: 260, y: 220 },
    { x: 260, y: 260 },
    { x: 260, y: 300 },
    { x: 260, y: 340 },
  ],
  forbidden: [
    { x: 60, y: 80 },
    { x: 260, y: 80 },
    { x: 160, y: 280 },
  ],
}


/*
  A little background on ImageData, which contains the pixel data of the canvas:

  The data property of ImageData is a long one dimensional array. Each pixel is represented by four consecutive values in the array.
  The first value is the red value, the second is the green value, the third is the blue value, and the fourth is the alpha value.
  This means that every fourth value is the beginning of a new pixel.
*/

/**
 * Verifies a given imagedata against a given answer key.
 * @returns true if the imagedata matches the answer key, false otherwise
 */
function verifySolution(data: ImageData, key: BitmapAnswerKey) {

  // Check if the dimensions match
  if (data.width !== key.dimensions.width || data.height !== key.dimensions.height) return false

  // Check if the required pixels are non-transparent
  for (const coord of key.required) {
    const index = (coord.y * data.width + coord.x) * 4
    if (data.data[index + 3] === 0) return false
  }

  // Check if the forbidden pixels are transparent
  for (const coord of key.forbidden) {
    const index = (coord.y * data.width + coord.x) * 4
    if (data.data[index + 3] !== 0) return false
  }

  return true
}

// Debugging function to overlay the answer key on the canvas
// (note that the puzzle most likely won't be solved with this on since the forbidden pixels are drawn red, i.e. non-transparent )
function overlayAnswerKey(canvas: HTMLCanvasElement, key: BitmapAnswerKey) {
  const context = canvas.getContext('2d')
  if (!context) return

  context.strokeStyle = 'green'
  for (const coord of key.required) {
    context.beginPath()
    context.rect(coord.x - 1, coord.y - 1, 2, 2)
    context.stroke()
  }

  context.strokeStyle = 'red'
  for (const coord of key.forbidden) {
    context.beginPath()
    context.rect(coord.x - 1, coord.y - 1, 2, 2)
    context.stroke()
  }
}

const TattooPuzzle = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  let isPainting = false

  const [isSolved, setIsSolved] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current // a bit annoying that this is needed to get the canvas
    if (!canvas) return

    //overlayAnswerKey(canvas, whiteBearAnswerKey)

    // Defining eventlisteners for the canvas
    canvas.addEventListener('mouseenter', updatePaintingStatus)
    canvas.addEventListener('mousedown', updatePaintingStatus)
    canvas.addEventListener('mouseup', updatePaintingStatus)

    canvas.addEventListener('mousemove', updateCanvas)
    canvas.addEventListener('mousedown', updateCanvas)
  }, [])

  /**
   * Sets the painting status to true if the mouse is down, false otherwise.
   */
  function updatePaintingStatus(e: MouseEvent) {
    isPainting = (e.buttons % 2 === 1)
  }

  /**
   * Updates the canvas by drawing a line, and checking if the puzzle is solved.
   * Is executed when the mouse is moved or clicked.
   */
  function updateCanvas(e: MouseEvent) {
    const currentMouseCoords = getCoordinates(e)
    const previousMouseCoords = getPreviousCoordinates(e)

    if (!isPainting) return
    if (!currentMouseCoords || !previousMouseCoords) return

    drawLine(previousMouseCoords, currentMouseCoords)

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d', { willReadFrequently: true })
    if (!context) return

    if (verifySolution(context.getImageData(0, 0, canvas.width, canvas.height), whiteBearAnswerKey)) {
      console.log("Puzzle solved")
      setTimeout(() => setIsSolved(true), 1000)
    }
  }

  /**
   * Returns the coordinates of the mouse on the canvas.
   */
  function getCoordinates(e: MouseEvent) {
    const canvas = canvasRef.current
    if (!canvas) return

    return { x: e.pageX - canvas.offsetLeft, y: e.pageY - canvas.offsetTop } as Coord
  }

  /**
   * Returns the coordinates of the mouse on the canvas, but offset by the movement of the mouse.
   */
  function getPreviousCoordinates(e: MouseEvent) {
    const canvas = canvasRef.current
    if (!canvas) return

    return { x: (e.pageX - canvas.offsetLeft) + e.movementX, y: (e.pageY - canvas.offsetTop) + e.movementY } as Coord
  }

  /**
   * Draws a line on the canvas.
   */
  const drawLine = (originalMousePosition: Coord, newMousePosition: Coord) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.strokeStyle = 'black'
    context.lineJoin = 'round'
    context.lineWidth = 35

    context.beginPath()
    context.moveTo(originalMousePosition.x - 2, originalMousePosition.y - 4) // added offsets to make a path even if mouse is not moving
    context.lineTo(newMousePosition.x + 2, newMousePosition.y + 4)           // it also changes the shape of the stroke
    context.closePath()

    context.stroke()
  }

  /**
   * Clears the canvas.
   */
  function resetCanvas() {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="w-full flex flex-col h-screen">
      <div>
        {isSolved ? (
          <div className="color-white text-black font-fraunces p-4 md:text-xl">
            <p>
              Today I got it! It hurt like hell, but I had Red with me to inspire me with quotes such as “WOW you are totally bleeding to death” and “Should I call the whaaambulance?”, what a friend. But I actually laughed through most of the pain so it worked. Afterwards he treated me to fika and took me on a photo session throughout the city. We took a lot of pictures and had an amazing time!
            </p>
            <p className="italic text-2xl mt-4">
              15th of March {settings.CURRENT_YEAR}
            </p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div
        style={{ backgroundImage: "url(/rafaella-mendes-diniz-AoL-mVxprmk-unsplash.jpg)" }}
        className="bg-cover bg-center h-full w-full grid place-items-center"
      >
        <div className={`${isSolved ? "opacity-0 pointer-events-none select-none" : "opacity-100 "} transition-opacity ease-linear duration-[2s]`}>
          <canvas className="border-2 border-black" ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
          <button onClick={resetCanvas}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
        <div className={`${isSolved ? "opacity-100" : "opacity-0"} pointer-events-none select-none transition-opacity ease-linear duration-[4s] absolute`}>
          <div>
            <img src="/tattoo.png" alt="tattoo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TattooPuzzle
