"use client"
import { ChangeEvent, useEffect, useState } from "react"

export default function Password() {

  const [coords, setCoords] = useState({lat: "", long: ""})

  let pass: HTMLElement | null

  useEffect(() => {
    pass = document.getElementById("pass")
    pass?.focus()
  }, [])

  async function change(e: ChangeEvent<HTMLInputElement>) {

    if (e.target.value !== "") {
      pass?.classList.add("caret-transparent")
    } else {
      pass?.classList.remove("caret-transparent")
    }

    if (e.target.value.length > 6) {
      e.target.value = e.target.value.substring(0, 6)
    }

    const res = await fetch("/api/pass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pass: e.target.value
      })
    })

    if (res.status === 200) {
      res.json().then(data => {
        setCoords({lat: data.LAT, long: data.LONG})
      })
    } else {
      console.log("incorrect details")
    }
  }

  return (
    <div className="w-screen h-screen bg-evildark grid place-items-center">
      <div className="w-4/5 font-goldman text-white grid place-items-center relative">
        <input className={`absolute bg-transparent text-9xl text-center w-full outline-none transition-all duration-[2s] ${coords.lat ? "opacity-0" : "opacity-100" }`} onChange={e => change(e)} type="text" id="pass" />
        <div className={`absolute text-5xl text-center transition-all leading-relaxed duration-[4s] delay-[2s] ${coords.lat ? "opacity-100" : "opacity-0" }`}>
          <p>{coords.lat}</p>
          <p>{coords.long}</p>
        </div>
      </div>
    </div>
  )
}