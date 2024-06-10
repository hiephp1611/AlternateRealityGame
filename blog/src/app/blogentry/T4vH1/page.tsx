import BlogComment from '@/app/blogComment';
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="font-fraunces shadow-2xl max-w-4xl px-2 py-2">
       <div className="flex flex-col md:flex-row">
         <div className="md:flex items-center justify-center md:basis-3/5 order-last md:order-first">
           <img className="w-142 h-80 object-cover mx-auto md:mx-0" src="/inistr.png" alt="Image not found"/>
         </div>
         <div className="md:basis-2/5 flex flex-col items-center justify-center order-first md:order-last md:px-4 py-4 md:py-0">
           <div className="font-bold text-xl mb-2 text-center">
             <h2>
               Good Job! Now Listen, I Found Something
             </h2>
           </div>
           <div className="italic">
            <p>
              15th of March 2053
            </p>
           </div>
           <div className="mt-4">
              <span className="inline-block bg-glacier-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Mystery
              </span>
           </div>
        </div>
      </div>
      <br/>
      <p>Sorry to take you through all those puzzles, but I found something and I don’t want to display it publicly because frankly I am a little bit scared. I admit, I might have gotten a bit carried away making a fake Twitter profile, but that’s just who I am.</p>
      <br/>
      <p>Anyways. Remember that post I made about working at INISTR? Well, I got fired. After working a few months there I got tired of knowing basically nothing about the company or even what the work I was doing was being used for. So I started asking questions. Somehow, I don’t think my bosses liked that, and quite quickly I got called into a meeting to be lectured about ”Industry respect”. I guess I misbehaved during the meeting or something, because not long after I was told INISTR was ”no longer in need of my services”. Very strange, but since I didn’t like working there anyway I took it as a sign and went with it.</p>
      <br/>
      <p>Still, I was curious (you know me), so I gave it one more shot to find out more about the company. I was looking through their website the other day and stumbled across their “Strategic Vision Document”, which is the most corporate sounding name for a PDF I have ever seen. At first glance it seemed normal, but when I saw that the spacing between words was off I remembered something. One of the few times I had heard a higher-up at INISTR talk she said something about how ”the truly great at INISTR can read the crosses between the lines”. I thought it was a long shot, but what if that was some sort of clue to something? I downloaded the document and did a ctrl-f-search for the letter x (a cross) and would you know it, some strange patterns emerged! I couldn’t make much out of the patterns more than that they look like letters, but the document must be hiding some sort of secret! It can’t be a coincidence. I will look more into it, and since you found this post you might be just as interested in the ”Mysteries All Around Us” as well, so why don’t you help me out? If anyone finds anything, leave it as a comment on this post!</p>
      <br/>
      <p>Good luck,</p>
      <p>Blue</p>
      <br/>
      <p>P.S: Don’t worry about me getting fired. It was sorta unexpected, but I didn’t really like the job anyways…</p>
      </div>
      <div className="">
        <BlogComment
          name="Blue"
          body="I think I found something but I am not sure if this is some sort of game or if it might be dangerous. I will update if I find more."
          date="16th of March 2053"
          replies={[]}
        />
      </div>
    </div>
  );
}
