import BannerWithSlogan from "../(Components)/BannerWithSlogan";

export default function Vision() {
  return (
    <>
      <BannerWithSlogan imgurl="https://images.unsplash.com/photo-1565870100382-f0a510db3cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80">
        We want a world were everyone's dreams are achievable
      </BannerWithSlogan>
      <div className="flex flex-col items-center w-full max-w-3xl text-justify p-6 gap-4">
        <p className="font-bold text-5xl">This is our vision</p>

        All over the world there are countless talented game developers and innovators in all regards of interactive media. Still, creating games and running a successful business are two very different skills. INISTR's mission is to help those who have great ideas into creating proftiable businesses by collaborating and letting the developers and creators focus on realising new ideas while we help running the business end.

        <a href="INISTR_Strategic_Vision_Document.pdf" className="underline" download>Want to know more? Read our Strategic Vision Document.</a>

        <p className="italic text-lg text-black/60">We're not just a publisher, we are a partner in your success.</p>
      </div>
    </>
  )
}
