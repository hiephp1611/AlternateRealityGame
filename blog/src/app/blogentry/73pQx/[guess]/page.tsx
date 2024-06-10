"use client"

const CORRECT_CODE = ["01", "11", "08", "10"];

/**
 * Returns a color class based on a guess.
 * Position and number are correct: bg-glacier-900 (green)
 * Number is correct but position is wrong: bg-yellow (yellow)
 * Number is not correct: bg-red (red)
 * @param guessNum The number that the player guessed
 * @param index The position of the number
 * @returns Tailwind color class based on guess
 */

function getColorShape(guessNum: string, index: number) {
  if (guessNum === null) {
    return "";
  } else if (guessNum === CORRECT_CODE[index]) {
    return "w-16 h-16 rounded-full flex justify-center border-2 items-center mr-4 bg-[#2E8B57]";
  } else if (CORRECT_CODE.includes(guessNum)) {
    return "w-16 h-16 rounded-t-full flex justify-center border-2 items-center mr-4 bg-[#FDDA0D]";
    //transform border-2 flex justify-center items-center mr-4
  } else {
    return "w-16 h-16 flex justify-center items-center border-2 mr-4 bg-[#C41E3A]";
  }
}

/**
 * React component for displaying a guess.
 * Number and position are correct: bg-glacier-900 (green)
 * Number is correct but position is wrong: bg-yellow (yellow)
 * Number is not correct: bg-red (red)
 * @param code String array where each element is a string of two digits representing the players guess at that position
 * @returns React component for displaying a guess
 */
function GuessedCode({ code }: { code: string[] }) {
  return (
    <div className="flex justify-center items-center mb-4">
      {code.map((guessNum, index) => (
        <div
          key={index}
          className={`${getColorShape(guessNum, index)}`}
        >
          <p className = "text-2xl font-goudy">{guessNum}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * For type safety of guess. Applies to slug in [guess].tsx
 */
interface guessParams {
    params : {guess : string}
}

export default function MastermindGame({ params: {guess} } : guessParams) {

  // If the guess not exactly 8 digits, return error message.
  // Message can easilty be replaced with react/html
  if (guess.length != 8 || !(/^\d+$/.test(guess))) {
    return (
        <div>
            Wrong format!
        </div>
    )
  }

  // Split the guess string into a string array of length 4
  // Each element is a string of two digits representing the players guess at that position
  const guessArray: string[] = [];
  for (let i = 0; i < 8; i += 2) {
    guessArray.push(guess.substring(i, i + 2));
  }


  // The actual visible part of the page
  // If the player guesses correctly there is a dedicated page for that (tramgame/01110810/page.tsx)
  return (
    <div className="flex justify-center items-center h-full">
      <GuessedCode code={guessArray} />
    </div>
  );
}
