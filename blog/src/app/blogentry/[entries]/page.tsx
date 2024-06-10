"use client"

import BlogCardDB from '@/app/(blogCardModel)/blogCardDB';
import ImageWithCredit from '@/app/ImageWithCredit';
import BlogComment from '@/app/blogComment';
import React, { useState } from 'react'
import parse from 'html-react-parser'


interface entryParams {
    params : {entries : string}
}

function Entry({ params: {entries} } : entryParams) {

  const blogDB : BlogCardDB = new BlogCardDB()
  const blogEntry = blogDB.getCardFromSlug(entries)

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-glacier-200 font-fraunces shadow-2xl max-w-4xl px-2 py-2">
       <div className="flex flex-col md:flex-row">
         <div className="md:flex items-center justify-center md:basis-3/5 order-last md:order-first">
           <ImageWithCredit clickFunction={() => setShowModal(true)} image={blogEntry.image} credit={blogEntry.imageCredit} style="cursor-pointer w-142 h-80 object-cover cursor-pointer mx-auto md:mx-0 p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"/>
         </div>
         <div className="md:basis-2/5 flex flex-col items-center justify-center order-first md:order-last md:px-4 py-4 md:py-0">
           <div className="font-bold text-xl mb-2 text-center">
             <h2>
               {blogEntry.title}
             </h2>
           </div>
           <div className="italic">
            <p>
              {blogEntry.date}
            </p>
           </div>
           <div className="mt-4">
            {blogEntry.tags.map((tag) => {
              return (
                <span className="inline-block bg-glacier-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {tag}
                </span>
              );
            })}
           </div>
        </div>
        </div>
        <br/>
        <p className="whitespace-pre-line break-words">
          {parse(blogEntry.text)}
        </p>
        <div className="justify-start font-fraunces pt-6 max-w-4xl flex flex-col">  
          <hr/>
          <h1 className={blogEntry.comments.length > 0 ? "text-xl font-bold" : "hidden"}>
            Comments:
          </h1>
          {blogEntry.comments.map((comment) => {
            return (
              <BlogComment
                name={comment.name}
                body={comment.body}
                date={comment.date}
                replies={comment.replies}
              />
            );
          })}
        </div>
      </div>
      
      {showModal ? (
        <>
          <div className="items-center flex m-2 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onClick={() => setShowModal(false)}>
          <div className="relative max-h-full w-auto my-6 mx-auto" onClick={e => e.stopPropagation()}>
              <div className="relative flex flex-col w-full bg-glacier-300">
                <button
                  className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black h-6 w-6 text-4xl mr-2">
                    ×
                  </span>
                </button>
                <img src={blogEntry.image} className="md:h-[90vh] md:w-auto h-auto w-[90vh] object-cover p-4" />
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Entry

