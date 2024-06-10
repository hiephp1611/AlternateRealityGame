"use client"

import Fuse from "fuse.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import BlogCard from "./blogCard";
import BlogCardDB from "./(blogCardModel)/blogCardDB";
import { SearchQueryAtom } from "./(header)/search";
import BlogTags from "./(blogCardModel)/BlogTags";

const cardDB = new BlogCardDB()

const fuseOptions = {
  includeScore: true,
  ignoreLocation: true,
  threshold: 0.4, //seems to be a good value, not really sure how it works though, since it sometime returns values above the threshold.
  keys: [
    "title",
    "description",
  ]
};

export default function Main() {
  const searchQuery = useRecoilValue(SearchQueryAtom) 
  const [shownResults, setShownResults] = useState(cardDB.getCards())
  const [shownTags, setShownTags] = useState([] as string[])
  const tags : string[] = Object.values(BlogTags)

  const handleTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    var tag = event.currentTarget.innerText

    if (shownTags.includes(tag)) {
      setShownTags(shownTags.filter(t => t !== tag))
    } else {
      setShownTags([...shownTags, tag])
    }
  }

  // Saves the last scroll coordinate in local storage (local storage is better than cookies for client side purposes)
  useEffect(() => {
    // Sets the scroll position to the last saved position
    const scrollPosition = localStorage.getItem("scrollPosition")
    if (scrollPosition) window.scrollTo(0, parseInt(scrollPosition))

    // Adds a scroll listener to save the scroll position
    window.onscroll = () => {
      console.log("scrollY", window.scrollY)
      if (window.scrollY === 0) return
      localStorage.setItem("scrollPosition", window.scrollY.toString())
    }
    // Removes the scroll listener when the component unmounts
    return () => {
      window.onscroll = null
    }
  }, [])



  // Updates the shown blog cards when the search query changes
  useEffect(() => {
    if (searchQuery !== "") {
      const fuse = new Fuse(cardDB.getCards(), fuseOptions)
      const result = fuse.search(searchQuery)
      console.log("result", result)
      setShownResults(result.map(r => r.item))
    } else {
      setShownResults(cardDB.getCards())
    }
  }, [searchQuery])

  return (
    <main className="p-4 grow flex flex-col items-center overflow-auto">
      <div className="flex flex-row flex-wrap gap-y-2 font-fraunces">
        <p className="hidden md:block">
          Filter by tags: 
        </p>
        {tags.map((tag) => {
          return (
            <button key={tag} onClick={handleTag} className={`inline-block ${shownTags.includes(tag) ? 'bg-glacier-700' : 'bg-glacier-500'} hover:bg-glacier-400 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 ml-4`}>
              {tag}
            </button>
          )
        })}
      </div>
      {shownResults.map((card, index) => {
        if (shownTags.length > 0) {
          if (!card.tags.some(t => shownTags.includes(t))) {
            return null
          }
        }

        return (
          <div key={index} className="my-4">
            <Link href={`/blogentry/${card.url}`}>
              <BlogCard
                title={card.title}
                description={card.description}
                date={card.date}
                image={card.image}
                imageCredit={card.imageCredit}
                url={card.url}
                text={card.text}
                comments={card.comments}
                tags={card.tags}
              />
            </Link>
          </div>
        );
      })}
    </main>
  )
}

