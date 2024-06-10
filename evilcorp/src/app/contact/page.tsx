import React from 'react'
import BannerWithSlogan from '../(Components)/BannerWithSlogan'

export default function Contact() {
  return (
    <>
      <BannerWithSlogan imgurl="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        Get in touch
      </BannerWithSlogan>
      <div className="flex flex-col items-center w-full max-w-3xl text-justify p-6 gap-4">
        <p className="font-bold text-5xl">We are always here for you</p>
        Can't find what you're looking for? Need special advice? You can always reach out to us. We are always happy to help.
        <hr/>
        <p className="font-bold">Email: </p> hello@inistr.com
        <p className="font-bold">Visiting Adress: </p> Eckens väg 38, 433 33, Partille
      </div>
    </>
  )
}
