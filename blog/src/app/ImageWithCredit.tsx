import React from 'react'

interface ImageCreditParams {
    image : string
    credit : string
    style? : string
    clickFunction?: Function
}

export default function ImageWithCredit(params : ImageCreditParams) {
    var textStyle : string = "text-xs text-center"
    
    if (params.style == undefined) {
        params.style = ""
    }

    if (params.credit == "") {
        textStyle = "hidden"
    }

    function whenClick() {
        if (params.clickFunction != undefined) {
            params.clickFunction()
        }
    }

    return (
        <>
            <div className="flex flex-col justify-items-center">
                <img className={params.style} src={params.image} alt="Image not found" onClick={whenClick}/>
                <p className={textStyle}>
                    Image credit: {params.credit}
                </p>
            </div>
        </>
    )
}
