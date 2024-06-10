"use client"
import React from "react"

export default function SlidingPuzzle() {

  function verifyPassword() {
    fetch("/api/pass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: (document.getElementById("password") as HTMLInputElement)?.value
      })
    }).then(res => {
      if (res.status === 200) {
        window.location.replace("/");
      } else {
        console.log("Incorrect password")
        document.getElementById("password")?.classList.remove("bg-glacier-200")
        document.getElementById("password")?.classList.add("bg-error")
        document.getElementById("password")?.classList.add("placeholder:text-black")
      }
    })
  }

  function clearError() {
    document.getElementById("password")?.classList.remove("bg-error")
    document.getElementById("password")?.classList.remove("placeholder:text-black")
    document.getElementById("password")?.classList.add("bg-glacier-200")
  }

  return (
    <div className="flex flex-col items-center bg-glacier-800">
      <iframe src="sliding-tile-puzzle/index.html" className="h-screen w-full scale-75 origin-top"></iframe>
      <div className="absolute bottom-6 flex flex-col items-center gap-4 bg-glacier-600 p-6 rounded w-1/4">
        <input className="bg-glacier-200 drop-shadow-md rounded-sm text-center p-1 transition-all w-4/5" onClick={clearError} type="text" id="password" placeholder="PASSCODE" />
        <button className="bg-glacier-400 rounded font-semibold py-2 px-4 drop-shadow-lg hover:bg-glacier-300 active:bg-glacier-200 transition-colors" type="submit" onClick={verifyPassword}>Submit</button>
      </div>
    </div>
  )
}

