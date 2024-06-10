"use client"
import React, { useState } from 'react';
import { settings } from '../../../globalsettings'

import _404 from './images/_404.png'
import imageS from './images/imageS.png'
import imageB from './images/imageB.png'
import imageL from './images/imageL.png'
import imageF from './images/imageF.png'
import image1data from './images/image1.png'
import image2data from './images/image2.png'

const _404_ = _404.src;
const imageS_ = imageS.src;
const imageB_ = imageB.src;
const imageL_ = imageL.src;
const imageF_ = imageF.src;



function Album() {

  const [{ image1, image2 }, setImages] = useState({
    image1: _404_,
    image2: _404_,
  })

  const albumEntries: AlbumEntry[] = [
    {
      image: imageS_,
      text: "We started our walk by walking along side Älven. The view across was really good, I'm always amazed by the size of the harbour cranes."
    },
    {
      image: image1,
      text: "Red snapped this masterpiece on our way to the park, please don't mind the shadow from the lens hood 😓"
    },
    {
      image: imageB_,
      text: "Spring is almost here and I can't wait to see the flowers inside the park. For now I'm stuck with these two dudes... and Red."
    },
    {
      image: imageL_,
      text: "We were able to catch the midday reflection of the channel, both seagull and boat free 🦆⛵"
    },
    {
      image: image2,
      text: "We decided stop again at  on our way back to the last place we visited on the walk. Red wanted to get a second picture because the sun was much better later in the day."
    },
    {
      image: imageF_,
      text: "Last stop of the day and it is closed, just our luck. Still, not wanting to go home empty handed I decided to take a picture of building anyway."
    },
  ]

  const [currentImage, setCurrentImage] = useState<string>()
  const [showModal, setShowModal] = useState(false)


  const inputCheck = (value: string) => {
    if (value === "Domkyrkan" || value === "domkyrkan") {
      setImages({
        image1: image1data.src,
        image2: image2data.src,
      })
      document.getElementById("answer")?.classList.add("font-fraunces")
      document.getElementById("answer")?.classList.remove("font-['Sue_Ellen_Francisco']")
      document.getElementById("answer")?.classList.remove("bg-glacier-100")
      document.getElementById("answer")?.classList.add("bg-white")
      document.getElementById("answer")?.classList.remove("border-b")

      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 500)
    }
  };

  const expandImage = (src: string) => {
    setCurrentImage(src);
    setShowModal(true);
  }

  return (
    <div className="p-4 font-fraunces">
      <div className="flex flex-col items-center justify-center h-24 text-center">
        <p className="underline text-white text-1xl md:text-2xl lg:text-4xl">
          Photo Session in central Gothenburg, 15th of March {settings.CURRENT_YEAR}
        </p>
        <p className="p-2">
          This album is from a walk I took with Red just after I got my tattoo. My shoulder hurt quite a bit still, but the weather was great and I had great time together with Red.
        </p>
        <p className="italic">
          note to self: i still need to add reds photos to this album before posting
        </p>
      </div>

      {showModal ? (
        <>
          <div className="items-center flex m-2 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={() => setShowModal(false)}>
            <div className="relative max-h-full w-auto my-6 mx-auto" onClick={e => e.stopPropagation()}>
              <div className="relative flex flex-col w-full bg-glacier-300">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black h-6 w-6 text-4xl mr-2">
                    ×
                  </span>
                </button>
                <img src={currentImage} className="md:h-[90vh] md:w-auto h-auto w-[90vh] object-cover p-4" />
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-8 py-5">
        {
          albumEntries.map((entry, index) => {

            if (index === 1) {
              return (
                <div className="bg-white p-2">
                  <img src={albumEntries[1].image} onClick={() => expandImage(albumEntries[1].image)} className="cursor-pointer transition-transform duration-100 ease-in-out transform hover:scale-105" />

                  <p className="p-2">
                    {albumEntries[1].text}
                  </p>
                </div>
              )
            }

            if (index === 4) {
              return (
                <div className="bg-white p-2">
                  <img src={albumEntries[4].image} onClick={() => expandImage(albumEntries[4].image)} className="cursor-pointer transition-transform duration-100 ease-in-out transform hover:scale-105" />

                  <p className="p-2">
                    {albumEntries[4].text.split("  ")[0]}&nbsp;
                    <input type="text" id="answer" onChange={e => inputCheck(e.target.value)} className="w-24 transition-all duration-1000 text-center border-b bg-glacier-100 font-['Sue_Ellen_Francisco']" />
                    &nbsp;{albumEntries[4].text.split("  ")[1]}
                  </p>
                </div>
              )
            }

            return (
              <AlbumEntryElement
                key={index}
                image={entry.image}
                text={entry.text}
                imageOnClick={() => expandImage(entry.image)}
              />
            )
          })
        }
      </div>

      <div className={`w-full flex-col items-center transition-opacity duration-1000 ${ image1 != _404_ ? "flex opacity-100" : "hidden opacity-0"}`}>
        <div className="md:w-1/2 text-justify text-lg">
          When we walked, we passed by my old school where I went to högstadiet. My favourite pastime was staying by my locker and talking with Red during lessons. Even though we weren't in the same class we had special times where we would always take 'bathroom breaks' and meet up at my locker. I had the number <strong>{settings.LOCKER_NUMBER}</strong>, so any time I get the chance to chose a locker I try to get one with the same number.
        </div>
      </div>

    </div>
  )
}

export default Album

type AlbumEntry = {
  image: string;
  text: string;
}

function AlbumEntryElement(props: AlbumEntry & { imageOnClick: () => void }) {
  return (
    <div className="bg-white p-2">
      <img src={props.image} onClick={props.imageOnClick} className="cursor-pointer transition-transform duration-100 ease-in-out transform hover:scale-105" />

      <p className="p-2">
        {props.text}
      </p>
    </div>
  )
}