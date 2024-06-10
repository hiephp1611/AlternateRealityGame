import BannerWithSlogan from '../(Components)/BannerWithSlogan'

export default function Services() {
  return (
    <>
        <BannerWithSlogan imgurl="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
            Your success story starts here
        </BannerWithSlogan>
        <div className="flex flex-col items-center w-full max-w-3xl text-justify p-6 gap-4">
            <p className="font-bold text-5xl">
                What can we do for you?
            </p>
                With decades of experience in the industry and a proven track record of success, we are ready to help you achieve your biggest goals. Through our wide variety of services we cover every aspect of making your game the next success story. Be it marketing, publishing or monetization, we have the experience and the know-how to help you succeed. If our standard services don't fit your needs, we will tailor a solution to your specific requirements.
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ServiceBox imgurl={"services1.jpg"}
                                title={"Monetization"}
                                description={"Our main solution: working with you and your requirements to optimize the monetization of your game. We offer a wide variety of revenue-generating options, and customize them to your environment."} />
                    <ServiceBox imgurl={"services2.jpg"}
                                title={"Marketing"}
                                description={"A game's revenue will only be as good as its marketing. Through us you can push your game to new crowds, and see your player base grow rapidly."} />
                    <ServiceBox imgurl={"services3.jpg"}
                                title={"Publishing"}
                                description={"With INISTR as your publisher, you can feel safe that your passion is in the right hands. Unbeatable contacts, decades of experiences and attention to detail is what characterizes the publishing process we provide."} />
                    <ServiceBox imgurl={"services4.jpg"}
                                title={"Packages"}
                                description={"No single solution is as great as a combination. Talk to us, tell us what you need, and we will make sure your game has every business aspect properly covered."} />
                </div>
        </div>
    </>
  )
}

interface ServiceBoxProps {
    title: string
    description: string
    imgurl: string
}

function ServiceBox(props : ServiceBoxProps) {
    return (
        <>
            <div style={{backgroundImage: `url("${props.imgurl}")`}} className="group overflow-hidden transition-all duration-200 relative w-80 h-80 flex flex-wrap bg-cover bg-bottom hover:bg-top text-white m-8 transform ease-in-out justify-center">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 duration-200 group-hover:opacity-40"/>
                <h1 className="text-3xl p-2 z-10 font-bold mt-[145px] group-hover:mt-12 transition-all duration-200">
                    {props.title}
                </h1>
                <p className="text-lg px-4 z-10 hidden transition-all duration-200 group-hover:block">
                    {props.description}
                </p>
            </div>
        </>
    )
}
