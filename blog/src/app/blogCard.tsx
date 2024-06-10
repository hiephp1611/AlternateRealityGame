import React from "react";
import blogCardModel from "./(blogCardModel)/blogCardModel"
import ImageWithCredit from "./ImageWithCredit";

export default function BlogCard(props: blogCardModel) {
  return (
    <div className="flex flex-col md:flex-row font-fraunces bg-glacier-200 border-glacier-400 hover:border-black border-2 md:w-[60vw] md:min-h-[384px] md:max-h-96 md:overflow-hidden">
      <div className="md:w-1/2 flex items-center justify-center">
        <ImageWithCredit image={props.image} credit={props.imageCredit} style="max-h-[22rem]"/>
      </div>
     <div className="px-6 py-4 md:w-1/2">
       <h2 className="font-bold text-xl mb-2 text-center">
         {props.title}
       </h2>
       <p className="italic text-gray-600 text-base mb-1 text-center">
          {props.date}
        </p>
        <div className="text-center justify-center items-center">
          {props.tags.map((tag) => {
            return (
              <span key={tag} className="inline-block bg-glacier-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {tag}
              </span>
            );
          })}
        </div>
        <p className="text-gray-900 text-base whitespace-pre-line text-center mt-4">
          {props.description}
        </p>
     </div>
    </div>
);
}
