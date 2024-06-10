type BanneWithSloganProps = {
  imgurl: string
  children: string
  credit?: string
}
export default function BannerWithSlogan(props: BanneWithSloganProps) {

  var creditStyle: string = ""

  if (props.credit == undefined) {
    creditStyle = "hidden"
  }

  return (
    <div style={{backgroundImage: `url("${props.imgurl}")`}} className="bg-cover bg-center w-full h-96 grid place-items-center relative">
      <p className={`text-white text-sm absolute bottom-0 left-0 ml-4 mb-4 ${creditStyle}`}>
        Image credit: {props.credit}
      </p>
      <div className="w-full h-full bg-black/70 absolute" />
      <div className="text-4xl md:text-5xl text-white font-gugi drop-shadow-2xl max-w-[80%] md:max-w-[50%] max-h-full leading-relaxed text-center">
        {props.children}
      </div>
    </div>
  )
}