import React from 'react'
import BlogCommentModel from './(blogCardModel)/blogCommentModel';

export default function BlogComment(params : BlogCommentModel) {
  var profilePicture : string = "/userPic.png"
  //var redProfilePicture : string = "/redUserPic.png"
  
  if (params.name == "Blue") {
    profilePicture = "blueProfile.png"
  }

  if (params.name == "Red") {
    profilePicture = "redProfile.png"
  }

  return (
    <div>
      <div className="max-w-4xl shadow-xl py-8 flex flex-grow">
        <img className="w-16 h-16 p-1" src={profilePicture}/>
        <div className="flex-grow ml-4 items-center">
          <p>
            <b>{params.name}:</b>
          </p>
          <p className="my-2 mr-2">
            {params.body}
          </p>
          <p className="text-sm">
            <i>{params.date}</i>
          </p>
        </div>
      </div>
      <div className="ml-8 pl-2 border-l-2 border-black hover:border-white bg-glacier-200">
        {params.replies.map((reply) => {
          return (
            <div className="ml-1">
            <BlogComment
              name={reply.name}
              body={reply.body}
              date={reply.date}
              replies={reply.replies}
            />
            </div>
          );
        })}
      </div>
    </div>
  )
}
