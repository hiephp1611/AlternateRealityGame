"use client"

import React, { useState } from 'react'
import BannerWithSlogan from '../(Components)/BannerWithSlogan'

export default function Career() {
  return (
    <>
      <BannerWithSlogan imgurl="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80">
        Share our vision? Join us in making dreams possible
      </BannerWithSlogan>
      <div className="flex flex-col items-center justify-items-center w-full max-w-3xl text-center p-6 gap-4">
        <p className="font-bold text-5xl">Job openings</p>
        We provide a fascinating, challenging and rewarding work environment. With us, your career can truly take off. If none of our current job openings match your profile, you can always send us an open application. We are always looking for talented people to join our team.
        <p>Because of our unique company structure, we use unique methods of recruitment. If any of our open positions are interesting to you, please reach out to us via career@inistr.com</p>
        <div className="grid mx-auto mt-4 grid-cols-1 md:grid-cols-3 gap-x-64 gap-y-4 justify-items-center">
          <JobOpeningModal title={"Monetization Strategy Manager"}
                      description={"We are seeking a Monetization Strategy Manager to join our team and help our clients maximize their revenue potential from video games. As the Monetization Strategy Manager, you will be responsible for developing and implementing strategies that will help our clients monetize their games through various channels such as in-game purchases, advertising, and partnerships. You will work closely with our clients to understand their business objectives and provide guidance on best practices to achieve their goals."}
                      requirements={["Bachelor's degree in Business Administration or related field.","5+ years of experience in game monetization or related field.","Strong analytical and problem-solving skills.","Excellent communication and interpersonal skills.","Proven ability to develop and implement successful monetization strategies."]}/>
          <JobOpeningModal title={"In-Game Advertising Manager"}
                      description={"We are looking for an experienced In-Game Advertising Manager to join our team and help our clients generate revenue through in-game advertising. As the In-Game Advertising Manager, you will be responsible for developing and executing advertising campaigns that are effective and non-intrusive for players. You will work closely with our clients to ensure that their advertising campaigns are aligned with their overall monetization strategy."}
                      requirements={["Bachelor's degree in Marketing or related field.","5+ years of experience in in-game advertising or related field.","Strong knowledge of advertising platforms and trends.","Ability to analyze data and identify opportunities for optimization.","Excellent communication and project management skills.","Proven ability to develop and execute successful advertising campaigns."]} />
          <JobOpeningModal title={"Monetization Data Analysis Specialist"}
                      description={"We are seeking a Monetization Data Analyst to join our team and help our clients optimize their monetization strategies through data analysis. As the Monetization Data Analyst, you will be responsible for collecting and analyzing data related to game monetization and providing insights to our clients on how to improve their revenue generation. You will work closely with our clients to understand their business objectives and provide recommendations based on data-driven insights."}
                      requirements={["Bachelor's degree in Statistics, Mathematics, or related field.","3+ years of experience in data analysis or related field.","Strong analytical and problem-solving skills.","Proficiency in SQL and Excel.","Excellent communication and presentation skills.","Proven ability to provide data-driven insights that drive business results."]} />
        </div>
      </div>
    </>
  )
}

interface JobOpeningProps {
    title: string
    description: string
    requirements: string[]
}

function JobOpeningModal(props: JobOpeningProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="border-l-[1px] md:border-b-[1px] md:border-l-0 border-white hover:border-black transition-all px-4 py-2 mb-4 md:px-0 md:py-0 md:mb-0 duration-400">
      <button
        type="button"
        className="text-center justify-center justify-items-center inline-flex h-40 w-80 items-center md:px-4 md:py-2 md:mb-4 text-base font-medium border border-black transition-all transform translate-x-0 hover:translate-x-4 md:hover:translate-x-0 md:translate-y-4 md:hover:translate-y-0 duration-400 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black hover:shadow-[inset_1rem_0_0_0] hover:shadow-gray-400 md:hover:shadow-[inset_0_-2rem_0_0] md:hover:shadow-gray-400 duration-[400ms,700ms]"
        onClick={() => setShowModal(!showModal)}
      >
        <div className="flex flex-col">
          {props.title}
          <p className="text-gray-500">Global HQ, Partille</p>
        </div>
      </button>
      </div>

      {showModal ? (
        <>
          <div className="items-center md:pt-0 pt-[26rem] flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:max-w-3xl w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {props.title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg text-start leading-relaxed">
                    {props.description}
                  </p>
                </div>
                <p className="text-lg mb-2 text-start px-6">Requirements: </p>
                <ul className="text-start p-6 list-disc">
                  {props.requirements.map((req) => {
                    return (
                      <li>
                        {req}
                      </li>
                    );
                  })}
                </ul>
                <hr/>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-600 hover:text-red-800 background-transparent font-bold px-6 py-2 text-sm mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </>
  )
}
